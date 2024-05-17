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

                async function renew(){                      
                    await renewToken.renewToken()
                    console.log('redirecting')
                    self.changeVal(localStorage.getItem('name')) 
                    //self.$forceUpdate();                                  
                }
                async function check(){ 
                    renew().then(()=>{
                        
                    }).catch(() => {
                        self.$router.push('/login')              
                    })
                    
                }   
                check()           
                  
                                                          
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