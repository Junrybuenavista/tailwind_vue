<template>

      <div class="py-3 px-4  h-20 grid grid-cols-4 gap-4 content-center">
         <div class="relative max-w-xs">
          <button  @click="openAddModal" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
            Add Course or Grade
          </button>
        </div>      
      </div> 


    
          

    <child :properties="this.properties" ref="ChildRef"/>
    <AddClass ref="AddClassRef" />
    <LoadingModal ref="LoadingModalRef" /> 
  </template>
  
  <script>
  import child from '../tables/TableModel_2'
  import AddClass from '../modals/AddClass.vue';
  import LoadingModal from '../modals/LoadingModal.vue';

    export default {
          components:{
            child,
            AddClass,
            LoadingModal
          },
          data() {
            return {
              properties:{
                headers: ["Id","Class Name", "Schedule Day","From","To", "Description"],
                indexSearch: 1,
                getData: '/class_schedule/list',
                deleteItem: '/class_schedule/delete/'
              },    
            }
          },
          async mounted(){
            this.$refs.LoadingModalRef.show()
            await this.$refs.ChildRef.getData();
            this.$refs.LoadingModalRef.close()
          },
          methods:{
            openAddModal() {
              console.log('hh')
                this.$refs.AddClassRef.clear();
                this.$refs.AddClassRef.show();
              }  
          }     
    }
    
  
  </script>