import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('../views/Home')
    },
    {
        name: 'Auth',
        path: '/auth',
        component: () => import('../views/Auth')
    },
    {
        name: '404',
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
