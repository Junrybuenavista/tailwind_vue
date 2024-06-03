<template>


  <div class="bg-white py-6 ">
    
  <div class="" >
    <nav class="h-full overflow-y-auto" aria-label="Directory">
      <div class="relative">    
        <div class="top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
          <h3>A</h3>
        </div>
        <ul role="list" class="relative z-0 divide-y divide-gray-200">

          <li v-for="item in items" :key="item.id" class="bg-white">
                <div class="flex items-center space-x-6 px-10 py-3  focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50">
                  <div class="flex items-center h-5">
                    <input id="hs-table-pagination-checkbox-5" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                    <label for="hs-table-pagination-checkbox-5" class="sr-only">Checkbox</label>
                  </div>
                  <div class="min-w-0 flex-1">
                    <a href="#" class="focus:outline-none">
                      <!-- Extend touch target to entire panel 
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      -->         
                      <p class="text-sm font-medium text-gray-900">{{item.first_name}} {{item.last_name}}</p>
                      <p class="truncate text-sm text-gray-500">Co-Founder / CEO</p>
                    </a>
                  </div>

                  <div class="min-w-0 flex-1">
                    <a href="#" class="focus:outline-none">
                      <!-- Extend touch target to entire panel 
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      -->         
                      <p class="text-sm font-medium text-gray-900">{{item.first_name}} {{item.last_name}}</p>
                      <p class="truncate text-sm text-gray-500">Co-Founder / CEO</p>
                    </a>
                  </div>

                  <div class="flex items-center h-5">
                    <input id="hs-table-pagination-checkbox-5" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                    <label for="hs-table-pagination-checkbox-5" class="sr-only">Checkbox</label>
                  </div>

                  <div class="flex items-center h-5">
                    <input id="hs-table-pagination-checkbox-5" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500">
                    <label for="hs-table-pagination-checkbox-5" class="sr-only">Checkbox</label>
                  </div>
                      
            </div>
          </li>

        </ul>
      </div>
    </nav>

  </div>
</div>

<LoadingModal ref="LoadingModalRef" />  
</template>

<script>

import LoadingModal from './modals/LoadingModal.vue';
import axios from "axios";
import renewToken from '../axios/renewToken'

export default {

    components: {
            LoadingModal,        
    },
    data(){
            return{
               items: [],                
            }
                  
        },
    mounted () { 
            this.$refs.LoadingModalRef.close()
            this.getData()
    },
    methods:{
        async getData(){
          this.$refs.LoadingModalRef.show()
              const userIds = {        
                  "userId": localStorage.getItem('userId')
              }  
              await axios.post('/student/list', userIds)
              .then(res => {
                    console.log(res.data);
                    this.items = res.data;
                    this.$refs.LoadingModalRef.close()                        
              })
              .catch((error)=>{             
                  renewToken.checkToken(error).then(()=>{
                  this.getData()
                })
                this.$refs.LoadingModalRef.close()   
              })
        }
    }
}
</script>

<style>

</style>