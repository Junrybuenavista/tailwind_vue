<template>
      <div class="py-3 px-4  h-20 grid grid-cols-5 gap-4 content-center">
         <div class="relative max-w-xs">
          <button  @click="openAddModal" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
            Add Student
          </button>
        </div>

        <div class="relative max-w-xs">
          <button  @click="refresh" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

            Refresh
          </button>
        </div>       
      </div>  
    <child :properties="this.properties" ref="ChildRef"/>
    <AddStudentModal ref="AddStudentModalRef" />
  </template>
  
  <script>
  import child from '../tables/TableModel_1'
  import AddStudentModal from '../modals/AddStudent.vue';

    export default {
          components:{
            child,
            AddStudentModal
          },
          data() {
            return {
              properties:{
                headers: ["Id","Name", "Last Name", "Middle Name", "Age", "Address"],
                indexSearch: 1,
                getData: '/student/list',
                deleteItem: '/student/delete/'
              },    
            }
          },
          mounted(){
             this.$refs.ChildRef.getData();
          },
          methods:{
            openAddModal() {
              console.log('hh')
                this.$refs.AddStudentModalRef.clear();
                this.$refs.AddStudentModalRef.show();
              },
              refrest(){
                this.$refs.ChildRef.getData();
              }  
          }     
    }
    
  
  </script>