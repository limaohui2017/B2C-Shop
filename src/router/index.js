import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/index/index.vue'
import Login from '../views/login/index.vue'
import Register from '../views/register/index.vue'

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home

    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }

]

const router = createRouter({
        history: createWebHashHistory(),
        routes
    })
    // router.beforeEach((to, from, next) => {
    //     if (to.path === '/login') return next()
    //     const tokenStr = window.sessionStorage.getItem('token')
    //     if (!tokenStr) return next('/login')
    //     next()
    // })

export default router