<template>

    <child :properties="this.properties" ref="ChildRef"/>
  </template>
  
  <script>
  import child from '../tables/TableModel_1'
  
    export default {
          components:{
            child
          },
          data() {
            return {
              properties:{
                headers: ["Id","Name", "Description"],
                indexSearch: 1,
                getData: '/product/category/list',
                deleteItem: '/product/delete/'
              },
              modalMessage:{
                message: 'Are you sure you want to delete',
              },        
              apiCalls: [
                          {
                            getdata: '/product/category/list',
                          },
                      ]         
            }
          },
          mounted(){
             this.$refs.ChildRef.getData();
          }     
    }
    
  
  </script>