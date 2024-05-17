

import axios from "axios";
//import { resolve,reject } from "core-js/fn/promise";

export default {

    async renewToken(){

        const refreshToken ={ 
            
                refreshToken: localStorage.getItem('refreshToken')
            }   
        
        console.log('renewing token')
        console.log(refreshToken)
        await axios.post('/auth/refresh-token/',refreshToken)
        .then(res => {
            
            console.log(res.data.accessToken);
            console.log(res.data.refreshToken);

            localStorage.setItem('accessToken',res.data.accessToken)
            localStorage.setItem('refreshToken',res.data.refreshToken) 
            console.log('Token refreshed')
            
        }) 
        .catch((error) => {
            throw error()                  
        })

        
    }
}       