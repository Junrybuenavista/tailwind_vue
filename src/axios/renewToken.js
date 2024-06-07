

import axios from "axios";


export default {

    async checkToken(message,router){
      
      return new Promise((resolve, reject) => {   
        if(message ==='jwt expired'){
              console.log('Renewing token')
              const refreshToken = { 
                  refreshToken: localStorage.getItem('refreshToken')
              }         
              console.log('Renewing token')
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
                  router.push('/login')        
                  reject('Promise is rejected'+error);                        
              })  
        }
      })
  
    }
}       