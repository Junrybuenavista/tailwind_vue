<template>
    <h1>{{responseText}}</h1>
   
</template>

<script>
import axios from "axios";
import renewToken from '../axios/renewToken'
import { onUnmounted } from 'vue'

export default {  
    
    data(){
            return{
            responseText:'',
               
            }
            
        },
        mounted () {     
        const self = this  
        axios.get('/')
        .then(res => {
            console.log(res.data+localStorage.getItem('name'));
            this.responseText = res.data+localStorage.getItem('name')
           
                    
        }) 
        .catch((error) => {
                onUnmounted()
                console.log(error.response.data.error.message)
                async function renew(){ 
                       
                    await renewToken.renewToken()
                    console.log('redirecting')
                    
                    self.$router.push('/')  
                    //self.$forceUpdate();                    
                }        
                renew()                                                 
        })
    }
    
}


</script>

<style>

</style>