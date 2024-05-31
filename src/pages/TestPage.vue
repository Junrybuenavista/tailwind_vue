<template>
  

  <CourseGrade :endpoint = "this.endpoint" ref="CourseGradeRef" />
</template>

<script>

import CourseGrade from '../component/dropdownMenu.vue';
 
export default {

  components:{
    CourseGrade
  },
  data(){
    return{
      endpoint: 'course_and_grade/list'
    }
  },
  mounted(){
    this.$refs.CourseGradeRef.getData();
  }

}
</script>

<style>

</style>