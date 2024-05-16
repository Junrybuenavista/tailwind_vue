<template>
    <h1>My account</h1>
   
</template>

<script>
import axios from "axios";
//import '../axios/global'
//import renewToken from '../axios/renewToken'

export default {  
    
    mounted () {         
        axios.get('/')
        .then(res => {
            console.log(res.data);
                   
        }) 
        .catch((error) => {
            console.log(error.response.data.error.message)
            //renewToken.renewToken()  
                                          
        })
    }
}


</script>

<style>

</style>