<template>



  <div class="flex flex-col" >
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="border rounded-lg divide-y divide-gray-200">
        <div class="py-3 px-4  h-20 grid grid-cols-2 gap-4 content-center">
          
              <form class="relative max-w-xs flex items-center ">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input v-model="keyword" type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
                    </div>
                </form>
            </div>


  
        
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr >
                <th scope="col" class="py-3 px-4 pe-0">
                  <div class="flex items-center h-5">
                    <input id="hs-table-pagination-checkbox-all" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                    <label for="hs-table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                  </div>
                </th>
                <th @click="sort('last_name')" v-for="(header, index) in this.properties.headers" :key="index" scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{{ header }}</th>
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
            <button type="button" class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none" aria-current="page">Page {{currentPage}}</button>
            <button @click="nextPage" type="button" class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
              <span class="sr-only">Next</span>
              <span aria-hidden="true">»</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>


<div class="form">                                                                                                                                                        
      <LoadingModal ref="LoadingModalRef" />                                                                      
  </div>

  <ConfirmationModal ref="ConfirmationModalRef"  /> 



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
                         deleteItem: '',
                }
            }
          },
        },
        components: {
          LoadingModal,
          ConfirmationModal,
          
        },
        data(){
                return{
                  keyword: '',
                  currentSort:'name',
                  currentSortDir:'asc',
                  pageSize:9,
                  currentPage:1,
                  items: [],                
                }
                  
        },
        mounted () { 
            this.$refs.LoadingModalRef.close()
        },
        methods:{
              async getData(filter1){

                const userIds = {        
                  "userId": localStorage.getItem('userId'),
                  "coursegradeId":filter1
                }   
                  this.$refs.LoadingModalRef.show();
                  await axios.post(this.properties.getData, userIds)
                  .then(res => {
                      this.items = res.data;
                      this.$refs.LoadingModalRef.close();                          
                  })
                  .catch((error)=>{             
                    renewToken.checkToken(error,this.$router).then(()=>{
                      this.getData(this.properties.getData)
                    })     
                  })
              },
              async delete(id){
                  this.$refs.LoadingModalRef.show();
                  await axios.post(this.properties.deleteItem+id)
                  .then(res => {
                      this.items = res.data;
                      this.getData()                          
                  })
                  .catch((error)=>{             
                    renewToken.checkToken(error).then(()=>{
                      this.delete(id)
                    })     
                  })
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
                  console.log(buttonValue._id)
                  
                  this.$refs.ConfirmationModalRef.show()
                  .then((result) => {
                        if (result) {
                          this.delete(buttonValue._id)
                        }
                    })
              }         
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