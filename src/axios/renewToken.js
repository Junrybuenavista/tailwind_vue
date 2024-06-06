

import axios from "axios";
//import { resolve,reject } from "core-js/fn/promise";

export default {

    async checkToken(message){
      
      return new Promise((resolve, reject) => {   
        if(message ==='jwt expired'){
          console.log('renewing token')
              const refreshToken = { 
                  refreshToken: localStorage.getItem('refreshToken')
              }   
              
              console.log('Renewing token')
              console.log(refreshToken)
              axios.post('/auth/refresh-token/',refreshToken)
              .then(res => {
                  
                  console.log(res.data.accessToken);
                  console.log(res.data.refreshToken);
      
                  localStorage.setItem('accessToken',res.data.accessToken)
                  localStorage.setItem('refreshToken',res.data.refreshToken) 
                  console.log('Token refreshed') 
                  resolve(true);    
              }) 
              .catch((error) => {        
                  reject('Promise is rejected'+error);                        
              })  
        }
      })
  
    }
}       