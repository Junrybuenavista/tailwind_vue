<template>
  
    <!-- Dropdown menu -->  
    <div class="max-w-sm mx-auto">
        <select required  id="dropdownId" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gender">
          <option selected value="" disabled>{{this.defaultSelection}}</option>
          <option v-for="item in this.classItems" :key="item._id" :value="item._id">{{item[Object.keys(item)[this.indexSearch]]}}</option>
        </select>
      </div>  
    </template>
    
    <script>
   
    import $ from 'jquery'
  

    export default {
        props:{
            defaultSelection:String,
            indexSearch: Number      
        },
        data(){
            return{
                classItems:[]            
            }
        },
        mounted(){
            console.log(this.classItems)
        },
        methods:{
              getId(){
                  return $('#dropdownId').find(":selected").val()
              },
              initClass(parentClassItems){
                this.classItems = parentClassItems
              }      
        }
    }
    </script>
    
    <style>
    
    </style>