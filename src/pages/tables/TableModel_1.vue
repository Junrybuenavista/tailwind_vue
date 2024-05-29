<template>

  <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="border rounded-lg divide-y divide-gray-200">
        <div class="py-3 px-4">
          <div class="relative max-w-xs">
            <label class="sr-only">Search</label>
            <input v-model="keyword" type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search for items">
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
              <svg class="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr >
                <th scope="col" class="py-3 px-4 pe-0">
                  <div class="flex items-center h-5">
                    <input id="hs-table-pagination-checkbox-all" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                    <label for="hs-table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                  </div>
                </th>
                <th @click="sort('name')" v-for="(header, index) in this.properties.headers" :key="index" scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{{ header }}</th>
                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">      

              <tr v-for="item in sortedItems" :key="item.id">
                <td class="py-3 ps-4">
                  <div class="flex items-center h-5">
                    <input id="hs-table-pagination-checkbox-5" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                    <label for="hs-table-pagination-checkbox-5" class="sr-only">Checkbox</label>
                  </div>
                </td>
                <th v-for="(item, index) in item" :key="index" scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{{ item }}</th>

                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button @click="deleteItem"  :value=JSON.stringify(item) type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
        <div class="py-1 px-4">
          <nav class="flex items-center space-x-1">
            <button @click="prevPage" type="button" class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
              <span aria-hidden="true">«</span>
              <span class="sr-only">Previous</span>
            </button>
            <button type="button" class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none" aria-current="page">{{currentPage}}</button>
            <button @click="nextPage" type="button" class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
              <span class="sr-only">Next</span>
              <span aria-hidden="true">»</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="form">                                                                                                                                                        
      <LoadingModal ref="LoadingModalRef" />                                                                      
  </div>

  <ConfirmationModal ref="ConfirmationModalRef" /> 


</template>

<script>

import LoadingModal from '../modals/LoadingModal.vue';
import ConfirmationModal from '../modals/ConfirmationModal.vue';
import axios from "axios";
import renewToken from '../../axios/renewToken'

export default {
  
        props: {
          properties: {
            type: Object,
            default() {
                return { headers: [],
                         getData: '',
                         indexSearch: 1,
                         deleteItem: ''
                }
            }
          },
        },
        components: {
          LoadingModal,
          ConfirmationModal
        },
        data(){
                return{
                  //headers: ["Id", "FirstName", "LastName"],
                  keyword: '',
                  currentSort:'name',
                  currentSortDir:'asc',
                  pageSize:7,
                  currentPage:1,
                  items: [],                
                }
                  
        },
        mounted () { 
            this.$refs.LoadingModalRef.close()
        },
        methods:{
              async getData(){

                const userIds = {        
                  "userId": localStorage.getItem('userId')
                }   
                console.log(userIds)
                  this.$refs.LoadingModalRef.show();
                  await axios.post(this.properties.getData, userIds)
                  .then(res => {
                      console.log(res.data);
                      this.items = res.data;
                      this.$refs.LoadingModalRef.close();                          
                  })
                  .catch((error)=>{             
                    this.handleError(error)     
                  })
              },
              async delete(id){
                  this.$refs.LoadingModalRef.show();
                  await axios.post(this.properties.deleteItem+id)
                  .then(res => {
                      console.log(res.data);
                      this.items = res.data;
                      this.getData()                          
                  })
                  .catch((error)=>{             
                    this.handleError(error)     
                  })
              },
              handleError(error){
                this.items= []
                console.log(error.response.data.error.message+' in catch')
                  if(error.response.data.error.message==='jwt expired'){
                        this.$refs.LoadingModalRef.close();
                        console.log('renewing token')

                        renewToken.renewToken(this.$router).then(()=>{
                            console.log('redirecting')
                            this.getData(this.properties.getData) 
                            console.log('redirecting3333')
                        }).catch((error)=>{
                            console.log(error)                         
                        })          
                    }else if(error.response.data.error.message==='jwt malformed'){
                        this.$router.push('/login')
                    }else console.log(error)   
              },
              sort:function(s) {
                  if(s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
                  }
                  this.currentSort = s;
              },
              nextPage:function() {
                  if((this.currentPage*this.pageSize) < this.items.length) this.currentPage++;
              },
              prevPage:function() {
                  if(this.currentPage > 1) this.currentPage--;
              },
              deleteItem: function(e) {
                  const buttonValue = JSON.parse(e.target.value)
                  console.log(buttonValue._id+'ggg')
                  
                  this.$refs.ConfirmationModalRef.show()
                  .then((result) => {
                        if (result) {
                          this.delete(buttonValue._id)
                        }
                    })
              },
        },
        computed:{     
            sortedItems(){
              try{
                return this.items.slice()
                .filter((Item) => {
                    return Item[Object.keys(Item)[this.properties.indexSearch]].toLowerCase().includes(this.keyword.toLowerCase());
                })
                .filter((row, index) => {
                    let start = (this.currentPage-1)*this.pageSize;
                    let end = this.currentPage*this.pageSize;
                    if(index >= start && index < end) return true;
                })  
                .sort((a,b) => {
                  let modifier = 1;
                  if(this.currentSortDir === 'desc') modifier = -1;
                  if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                  if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                  return 0;
                })
              }catch(error){return console.log(error+' - sortedItems')}  
            }
      }     
}
</script>

<style>

</style>