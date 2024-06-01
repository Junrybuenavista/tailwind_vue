<template>
  
    <!-- Dropdown menu -->  
<form class="max-w-sm mx-auto">
  <select v-model="this.selected" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option v-for="item in this.items" :key="item._id" value="US">{{item.name}}</option>
  </select>
</form>

    
    </template>
    
    <script>
    import axios from "axios";

    export default {
        props:{
            endpoint:String,
            defaultSelection:String      
        },
        data(){
            return{
                showDropdown:true,
                items: [],
                selected: ''
            }
        },
        methods:{
          async getData(){
              const userIds = {        
                "userId": localStorage.getItem('userId')
              }  
                await axios.post(this.endpoint, userIds)
                .then(res => {
                    console.log(res.data);
                    this.items = res.data;                        
                })
                .catch((error)=>{             
                  this.handleError(error)     
                })
              },
          show(){
              console.log('click')
              console.log(this.endpoint)
              this.showDropdown = !this.showDropdown
          }
        }
    }
    </script>
    
    <style>
    
    </style>