<template>
  
    <!-- Dropdown menu -->  
    <div class="max-w-sm mx-auto">
        <select required  id="dropdownId" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gender">
          <option selected value="" disabled>{{this.defaultSelection}}</option>
          <option v-for="item in this.items" :key="item._id" :value="item._id">{{item.name}}</option>
        </select>
      </div>  
    </template>
    
    <script>
    import axios from "axios";
    import $ from 'jquery'
    import renewToken from '../axios/renewToken'

    export default {
        props:{
            endpoint:String,
            defaultSelection:String      
        },
        data(){
            return{
                
                items: [],
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
              getId(){
                  return $('#dropdownId').find(":selected").val()
              },
              handleError(error){
                this.items= []
                console.log(error.response.data.error.message+' in catch')
                  if(error.response.data.error.message==='jwt expired'){
                        console.log('renewing token')

                        renewToken.renewToken(this.$router).then(()=>{
                            console.log('redirecting')
                            this.getData() 
                            console.log('redirecting3333')
                        }).catch((error)=>{
                            console.log(error)                         
                        })          
                    }else if(error.response.data.error.message==='jwt malformed'){
                        this.$router.push('/login')
                    }else console.log(error)   
              },
             
             
        }
    }
    </script>
    
    <style>
    
    </style>