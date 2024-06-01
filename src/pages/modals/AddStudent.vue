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
      <h4 class="mb-4 text-2xl font-bold dark:text-white">Add Student</h4>
      <div id='response' v-show="resIsShow">
         <p  class="text-[13px] text-red mt-2">{{responseText}}</p>
      </div>

      <CourseGrade :endpoint = "this.dropdownendpoint" defaultSelection = "Choose course/grade" ref="CourseGradeRef" />

      <input v-model="form.first_name" type="text" id="category" aria-describedby="helper-text-explanation" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Fist Name">

      <input v-model="form.last_name" type="text" id="category" aria-describedby="helper-text-explanation"  class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name">

      <input v-model="form.middle_name" type="text" id="category" aria-describedby="helper-text-explanation" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Middle Name">

      <input v-model="form.age" type="text" id="category" aria-describedby="helper-text-explanation" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age">

      
      <div class="max-w-sm mx-auto">
        <select required  id="gender" class="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gender">
          <option selected value="" disabled>Choose gender...</option>
          <option value="Male">Male</option>
          <option value="Famale">Famale</option>
        </select>
      </div>

      <textarea v-model="form.address" id="category" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address"></textarea>

      <div class="!mt-5">
            <button  @click="addStudent" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">
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
  import CourseGrade from '../../component/dropdownMenu.vue';

      export default {

        components:{
          CourseGrade
        },
        data(){
                return {
                  resIsShow:true,
                  showModal: false,
                  responseText:'',
                  form: {
                      userId: '',
                      first_name: '',
                      last_name: '',
                      middle_name: '',
                      age: '',
                      gender: '',
                      address: '',
                      coursegradeId: ''
                      
                  },
                  courseGradeItems: [],
                  dropdownendpoint: 'course_and_grade/list'
                }
        
            },
            mounted(){
               this.$refs.CourseGradeRef.getData()
            },
            methods:{
                show(){ 
                  this.showModal = !this.showModal
                  this.resIsShow = !this.resIsShow
                },
                test(){  
                  console.log('gender'+$('#gender').find(":selected").val()+'end1')
                  console.log('course'+this.$refs.CourseGradeRef.getId())
                },
                async addStudent(){
                    this.loading = true
                    this.form.userId = localStorage.getItem('userId')
                    this.form.gender = $('#gender').find(":selected").val()
                    this.form.coursegradeId = this.$refs.CourseGradeRef.getId()
              
                    axios.post('/student', this.form)
                    .then((res) => {
                            console.log(res.data.message)
                            this.form = {
                              first_name: '',
                              last_name: '',
                              middle_name: '',
                              age: '',
                              address: ''
                            }
                            this.responseText = res.data.message
                            $("#response").fadeIn();
                            this.loading =  false                
                          })
                          .catch((error) => {
                              console.log(error.response.data.error.message)
                              this.responseText = error.response.data.error.message
                              $("#response").fadeIn();
                                               
                    })
                  },
                  clear(){
                    this.form = {
                              first_name: '',
                              last_name: '',
                              middle_name: '',
                              age: '',
                              address: ''
                            }
                    this.responseText = ''        
                  }
            }
      }
        
  </script>
  
  <style>
  
  </style>