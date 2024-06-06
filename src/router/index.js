import { createRouter,  createWebHistory } from "vue-router";
import dashboard from '../pages/master/Master_Dashboard'

import HomePage from "@/pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import AccountPage from "@/pages/AccountPage.vue";
import TestPage from "@/pages/TestPage.vue";
import TestPage2 from "@/pages/TestPage2.vue";
import LogoutPage from "@/pages/LogoutPage.vue";
import Add_Del_Product from "@/pages/Add_Del_Product.vue";
import Student_Table from "@/pages/tables/Student_Table.vue";
import TableModel_1 from "@/pages/tables/TableModel_1.vue";
import ClassSched from "@/pages/tables/ClassSchedule.vue";
import CheckAttendance from "@/pages/CheckAttendance.vue";
import Calendar from "@/calendar/CalendarView.vue";
import Components_sample from "@/pages/components_sample.vue";


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
                component: ClassSched
            },
            {
                name: 'Check Attendance',
                path: '/check_attendance',
                component: CheckAttendance
            },
            {
                name: 'Calendar',
                path: '/calendar',
                component: Calendar
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
    },
    {
        name: 'Test2 Page',
        path: '/testpage2',
        component: TestPage2,
    },   
    {
        name: 'Table',
        path: '/table1',
        component: TableModel_1,
    }
    ,   
    {
        name: 'Component',
        path: '/component',
        component: Components_sample,
    }


  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    
  });
  
  export default router;