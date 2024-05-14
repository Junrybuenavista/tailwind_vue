import { createRouter,  createWebHistory } from "vue-router";
import dashboard from '../pages/master/Master_Dashboard'
import HomePage from "@/pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import AccountPage from "@/pages/AccountPage.vue";

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
                name: 'Account',
                path: '/',
                component: AccountPage
            }

        ]
    }
  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    
  });
  
  export default router;