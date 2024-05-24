<template>
    <TableCategory indexSearch=0 :items="this.items" :headers="this.headers" />

<div class="form">                                                                                                                                                        
      <LoadingModal ref="ModalRef" />                                                                      
  </div>

</template>

<script>
import axios from "axios";
import renewToken from '../../axios/renewToken'
import LoadingModal from '../modals/LoadingModal.vue';
import TableCategory from '../tables/TableModel_1'

export default {
        components: {
          LoadingModal,
          TableCategory
        },
        data(){
            return{
                headers: ["Name", "Description"],
                items: []           
            }
                  
        },
        mounted () { 
          try{    
               this.query()                                                                                                                                  
          }
          catch(error){
              console.log(error)
            }
        },
        methods:{
            async query(){
              this.$refs.ModalRef.show();
              await axios.get('/product/category/list')
              .then(res => {
                  console.log(res.data);
                  this.items = res.data;
                  this.$refs.ModalRef.close();                          
              })
              .catch((error)=>{
                console.log(error.response.data.error.message+' in catch')
                if(error.response.data.error.message==='jwt expired'||error.response.data.error.message==='jwt malformed'){
                      this.$refs.ModalRef.close();
                      console.log('renewing token')                                 
                        renewToken.renewToken(self.$router).then(()=>{
                        console.log('redirecting') 
                        this.query()
                      })          
                  }else console.log(error)     
              })
          }
        }   

}
</script>

<style>

</style>