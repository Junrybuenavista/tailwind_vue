import { createRouter,  createWebHistory } from "vue-router";
import dashboard from '../pages/master/Master_Dashboard'

import HomePage from "@/pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import AccountPage from "@/pages/AccountPage.vue";
import TestPage from "@/pages/TestPage.vue";
import LogoutPage from "@/pages/LogoutPage.vue";
import Add_Del_Product from "@/pages/Add_Del_Product.vue";
import Student_Table from "@/pages/tables/Student_Table.vue";
import TableModel_1 from "@/pages/tables/TableModel_1.vue";
import CourseGrade_Table from "@/pages/tables/CourseGrade_Table.vue";
import CheckAttendance from "@/pages/CheckAttendance.vue";


const routes = [
    {
        name: 'Master_Dashboard',
        path: '/',
        component: dashboard,
        children:[
            {
                name: 'Home',
                path: '/home',
                component: HomePage
            },
            {
                name: 'profile',
                path: '/profile',
                component: ProfilePage
            },
            {
                name: 'Account',
                path: '/',
                component: AccountPage
            }
            ,
            {
                name: 'Product',
                path: '/product',
                component: Add_Del_Product
            },
            {
                name: 'Student table',
                path: '/student/list',
                component: Student_Table
            },
            {
                name: 'CourseGrade table',
                path: '/coursegrade/list',
                component: CourseGrade_Table
            },
            {
                name: 'Check Attendance',
                path: '/check_attendance',
                component: CheckAttendance
            },
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'register',
        path: '/register',
        component: RegisterPage
    },    
    {
        name: 'Logout',
        path: '/logout',
        component: LogoutPage
    },  
    {
        name: 'Test Page',
        path: '/testpage',
        component: TestPage,
    }
    ,  
    {
        name: 'Table',
        path: '/table1',
        component: TableModel_1,
    }

  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    
  });
  
  export default router;