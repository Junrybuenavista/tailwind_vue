<template>
  <ClassName indexSearch="1"  classItems = "this.classItems" defaultSelection = "Choose class" ref="ClassNameRef" />
</template>

<script>


import ClassName from '../component/dropdownMenu.vue';
import renewToken from '../axios/renewToken'
import axios from "axios";

export default {

    components:{
          ClassName
    },
    data(){
        return{
            classItems:[],
            Students:[]
        }
    },
    async mounted(){
        this.getData2()
    },
    methods:{
        getData(){
                const payload = {        
                    "userId":localStorage.getItem('userId')
                }   
                 axios.post('class_schedule/lis',payload)
                .then(res => {
                     console.log(res)
                     this.classItems = res.data;
                     axios.post('student/list',payload)
                     .then((res)=>{
                        console.log(res)
                        this.Students = res.data;
                        console.log('success')
                     })
                     .catch((error)=>{
                        console.log(error)
                     })

                })
                .catch((error)=>{
                    console.log('catched')         
                    console.log(error.response.data.error.message)    

                    renewToken.checkToken(error.response.data.error.message,this.$router)
                    .then((result)=>{
                        if(result){
                            this.getData()
                        }     
                    }).catch((error)=>{
                        console.log(error)
                    })
                   
                })
        },
        getData2(){
            const payload = {        
                    "userId":localStorage.getItem('userId')
                } 

            axios.all([axios.post(`student/list`,payload),
                       axios.post(`class_schedule/list`,payload)])
            .then(axios.spread((firstResponse, secondResponse) => {
                //this.classItems = firstResponse.data
                this.$refs.ClassNameRef.initClass(secondResponse.data);
                console.log(firstResponse.data,secondResponse.data);
                console.log('getdata2')
            }))
            .catch(error => {
                renewToken.checkToken(error.response.data.error.message,this.$router)
                    .then((result)=>{
                        if(result){
                            this.getData2()
                        }     
                    }).catch((error)=>{
                        console.log(error)
                    })
            });
        }
       
    }

}
</script>

<style>

</style>