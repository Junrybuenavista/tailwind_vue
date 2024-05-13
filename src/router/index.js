import { createRouter,  createWebHistory } from "vue-router";
import dashboard from '../pages/master/Master_Dashboard'
import HomePage from "@/pages/HomePage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

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
            }

        ]
    }
  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    
  });
  
  export default router;