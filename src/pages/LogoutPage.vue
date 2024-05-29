<template>
    <p ref="response" id="response_id"></p> 
</template>

<script>
import axios from "axios";

export default {  
    
 
        mounted () {   
        const refreshToken ={        
            refreshToken: localStorage.getItem('refreshToken')
        } 
            
        const self = this
        console.log(refreshToken)  
        axios.post('/auth/logout/',refreshToken)
        .then(res => { 
            console.log(res)
            console.log('Removing token....')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('name')
            console.log('Remove and Logout Successfully!')
            this.changeVal('Logout Successfully!')
                    
        }) 
        .catch((error) => {
                console.log(error)
                self.changeVal('Error in loging out')                                              
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