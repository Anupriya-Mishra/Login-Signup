
import {createRouter,createWebHistory} from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ForgotPassword from '../components/ForgotPassword'
import UserHome from '../components/UserHome'

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/signup',
        name:'Signup',
        component:Signup
    },
    {
        path:'/forgotpassword',
        name:'ForgotPassword',
        component:ForgotPassword
    },
    {
        path:'/userhome',
        name:'UserHome',
        component: UserHome
    }
]
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router