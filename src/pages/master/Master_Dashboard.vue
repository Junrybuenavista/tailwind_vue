<template>
  <div class = 'w-screen h-screen flex'>
    <div class ='rounded-xl w-[300px] h-full bg-gray-200 text-white' id="sidebardiv">
      <div class= 'h-[50px] bg-gray-900 flex justify-start items-center'>
        <div class="px-[80px]">
          <h3 class="font-bold text-xl">Dashboard</h3>
        </div>
      </div>
      <div class= 'h-[calc(100vh-50px)] bg-gray-800 py-[20px]'>
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class=" flex flex-col justify-between space-y-[10px]">
     
                <router-link to="/" >
                  <button @click="analyticsDrop" v-bind:class="this.buttonAnalytics"  type="button" href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                      </svg>
                      <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Analytics</p>
                  </button>
                 </router-link> 

                            
                  <button @click="studentDrop" v-bind:class="this.buttonStudent"  type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />

                      </svg>
                      <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Students</p>
                  </button>
                  <div id='student' v-show="false" class="pl-4" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <router-link  to="/coursegrade/list" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                          Class Schedules
                       </router-link>
                      <router-link to="/student/list" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                         Student List
                      </router-link>
                  </div>
                   
                  <button @click="attendanceDrop" v-bind:class="this.buttonAttendance" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
                      <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clip-rule="evenodd"></path>
                    </svg>
                    <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Attendance</p>
                  </button>    

                      <div id='attendance' v-show="false" class="pl-4" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <router-link  to="/calendar" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                            Calendar
                         </router-link>
                         <router-link to="/check_attendance" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                            Check Attendance
                         </router-link>
                      </div>  
            </div>
          
          <div class="h-[50px]"> 
            <router-link to="/logout" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM17 15.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM3.75 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM4.5 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM10 11a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 10 11ZM10.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.75 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16.25 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                </svg>
                Setting
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class = 'w-full h-full bg-gray-400'>
      <div class= 'h-[50px] bg-gray-900'>
        <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
          <!-- Hambuger menu -->
          <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
           <!-- Hambuger menu end -->
           <div class="w-[calc(100%-30px)] flex">
              <!-- Search bar -->
              <div class="w-[calc(100%-200px)] flex justify-center ">
                 
                
              </div>

              <!-- User login -->
              <div class="w-[200px] ">
                <div class="flex items-center justify-start space-x-4" @click="accountDrop">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <div class="font-semibold dark:text-white text-left">
                    <div>Welcome</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">{{userName}}</div>
                  </div>
                </div>
              <!-- Drop down -->
                <div v-show="false" id="accountdiv" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div class="py-1 text-left" role="none">
                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                    <a href="/logout" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sign out</a>
                    <form method="POST" action="#" role="none">
                      <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">This is a button</button>
                    </form>
                  </div>
                </div>
              </div>
            <!-- User login end-->           
           </div>

        </div>

        <div class= 'px-5 h-[calc(100vh-50px)] bg-white' >
          <nav class="px-3 h-full overflow-y-auto" aria-label="Directory">
            <div class="h-full">
              <router-view></router-view>
            </div>
          </nav>
        </div>  
      </div>
      
  </div>
  </div>
  

</template>

<script>
import $ from 'jquery'
//import Modal from '../TestPage.vue';

export default {


      data() {
        return {
          buttonIsNotSeleted: 'middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize',
          buttonIsSelected: 'middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize',
          buttonStudent: '',
          buttonAnalytics: '',
          buttonAttendance: '',
          isModalOpen: false,
          userName: localStorage.getItem('name'),
          showDropDown: false,
          showSide: true,
          registerDropDown:false
        }
      },
      methods: {
        // hide show side bar
        toggleSideBar() {
          $("#sidebardiv").toggle('slide:right');

        },
        accountDrop() {
          //this.showDropDown = !this.showDropDown
          $("#accountdiv").fadeToggle();
        },
        productDrop() {
          $("#div1").fadeToggle();
        },
        studentDrop() {
          this.subButtonReset()
          this.buttonReset()
          this.buttonStudent = this.buttonIsSelected
          $("#student").fadeToggle();
          
        },
        analyticsDrop(){
          this.subButtonReset()
          this.buttonReset()
          this.buttonAnalytics = this.buttonIsSelected
        },
        attendanceDrop() {
          this.subButtonReset()
          this.buttonReset()
          this.buttonAttendance = this.buttonIsSelected
          $("#attendance").fadeToggle();
        },
        buttonReset(){
          this.buttonStudent = this.buttonIsNotSeleted
          this.buttonAttendance = this.buttonIsNotSeleted
          this.buttonAnalytics = this.buttonIsNotSeleted
        },
        subButtonReset(){
          $("#attendance").hide();
          $("#student").hide();
        }, 

      },mounted() {

        this.buttonReset()
        window.addEventListener("storage", (event) => {
          if (event.storageArea != localStorage) return;
          if (event.key === "refreshToken") {
            this.$router.push('/login')
            //location.reload();
          }
        });
      },
        
}

</script>

<style>

</style>
  
