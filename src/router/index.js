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
            }

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

  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    
  });
  
  export default router;