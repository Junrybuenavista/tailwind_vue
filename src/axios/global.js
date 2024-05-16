import axios from "axios";

axios.defaults.baseURL = 'http://localhost:7777';
axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('accessToken');

axios.interceptors.request.use((config)=>{
    console.log('request intercepted')
    config.headers.Authorization = 'Bearer '+localStorage.getItem('accessToken');
    return config
})

