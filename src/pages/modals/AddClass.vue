<template>
  
  <div v-show="showModal"  id="myModal" class="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg">
      <div class="flex justify-end">
        <button @click="show" id="closeModal" class="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    <form @submit.prevent="addCategory" class="w-96 max-w-sm mx-auto">
      <h4 class="py-4 text-2xl font-bold dark:text-white">Add course or grade</h4>
      <div id='response' v-show="resIsShow">
         <p  class="text-[13px] text-red">{{responseText}}</p>
      </div>

      <input v-model="form.className" type="text" id="category" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Class Name">
      
      <label for="message" class="py-4 text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scheduled day</label>
      <div class="relative flex w-full max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700">
        <nav class=" min-w-[240px] flex-row columns-2 gap-1 font-sans text-base font-normal text-blue-gray-700">
          <div v-for="(day, index) in days" :key="index" role="button" class="items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label :htmlFor="day" class="flex items-center w-full px-3 py-2 cursor-pointer">
              <div class="grid mr-3 place-items-center">
                <div class="inline-flex items-center">
                  <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="horizontal-list-vue">
                    <input :id="day" :value="day" v-model="this.selectedDays" type="checkbox" class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                    <span
                      class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {{day}}
              </p>
            </label>
          </div>
        </nav>
      </div>

      <form class="py-4 max-w-[16rem]  grid grid-cols-2 gap-4">
          <div>
              <label for="start-time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start time:{{form.scheduleTimeFrom}}</label>
              <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                      </svg>
                  </div>
                  <input v-model="form.scheduleTimeFrom" type="time" id="start-time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
              </div>
          </div>
          <div>
              <label for="end-time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End time:</label>
              <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                      </svg>
                  </div>
                  <input v-model="form.scheduleTimeTo" type="time" id="end-time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
              </div>
          </div>
      </form>

      <textarea v-model="form.description" id="category" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>

      <div class="!mt-5">
            <button  class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">
                Save
            </button>
            <button  @click="show" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">
                Exit
            </button>
      </div>
    </form>

      
    </div>
  </div>
  
  </template>
  
  <script>
  import axios from "axios";
  import $ from 'jquery'
  import {ref} from 'vue'
  import renewToken from '../../axios/renewToken'

      export default {
            data(){
                return{
                  days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
                  selectedDays: ref([]),
                  resIsShow:true,
                  showModal: false,
                  responseText:'',
                  form: {
                      className: '',
                      scheduleDay: [],
                      description: '',
                      scheduleTimeFrom:'',
                      scheduleTimeTo:''
                  },
                }
        
            },
            
            methods:{
                show(){ 
                  this.showModal = !this.showModal
                  this.resIsShow = !this.resIsShow
                },
                addCategory(){      
                    this.loading = true
                    this.form.userId = localStorage.getItem('userId')
                    this.form.scheduleDay = this.selectedDays
                    
                    console.log(this.form)

                  
                    //$("input:checkbox[name=type]:checked").each(function(){
                      //   self.form.scheduleDay.push($(this).val())
                   // });
                   //this.form.scheduleDay.push([{hehe:'hehe'}])
                    
                    axios.post('/class_schedule',this.form)
                    .then((res) => {

                      
                            console.log(res.data.message)
                            this.form = {
                              className: '',
                              description: ''
                            }
                            this.responseText = res.data.message
                            $("#response").fadeIn();
                            this.loading =  false                
                          })
                          .catch(async(error) => {
                              console.log(error.response.data.error.message)
                              this.responseText = error.response.data.error.message
                              await renewToken.checkToken(error.response.data.error.message,this.$router)
                              this.addCategory()
                              $("#response").fadeIn();
                                               
                    })
                  },
                  clear(){
                    this.form = {
                              className: '',
                              description: ''
                            }
                    this.responseText = ''        
                  }
            }
      }
        
  </script>
  
  <style>
  
  </style>