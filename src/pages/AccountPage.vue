<template>
    <h1>My account</h1>
</template>

<script>
import axios from "axios";

export default {    
    mounted () {

        const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTU2Nzk4MDYsImV4cCI6MTcxNTY3OTg2NiwiYXVkIjoiNjY0MzMyM2E5NjZjNDg0ZmY0MzViNDRlIiwiaXNzIjoiamh1bnRhLmNvbSJ9.grDQoDTb9m9XyO3eR6VxEdqJWvT7QQrm0NZ4g94KqWg';
        const BASEURL = '/';
        const ENDPOINT = 'http://localhost:7777/';

        axios.create({
            baseURL: BASEURL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+TOKEN
            }
        })
        .get(ENDPOINT)
        .then(res => {
            console.log(res.data);
        }) 
        .catch((error) => {
            console.log(error.response.data.error.message)                                   
        })
  }
}

</script>

<style>

</style>