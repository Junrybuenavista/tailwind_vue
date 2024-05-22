<template>
    <h1>My company</h1>
    <p ref="response" id="response_id">This is the initial text</p>
   
</template>

<script>
import axios from "axios";
import renewToken from '../axios/renewToken'

export default {  
    
    data(){
            return{
        
               
            }
            
        },
        mounted () {     
        const self = this  
        axios.get('/')
        .then(res => {
            console.log(res.data+localStorage.getItem('name'));
            //nameuser = res.data+localStorage.getItem('name')
            this.changeVal(localStorage.getItem('name'))
                    
        }) 
        .catch((error) => {
                console.log(error.response.data.error.message)
                if(error.response.data.error.message==='jwt expired'){                                 
                    renewToken.renewToken(self.$router)
                    console.log('redirecting')
                    self.changeVal(localStorage.getItem('name'))
                }else console.log(error)                                                                                                                                
        })
    },
    methods: {
      changeVal(value) { 
        this.$refs.response.innerHTML = value;
      }
    }
    
}
</script>

<style>

</style>