import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import BlogList from '../views/BlogList.vue';
import BlogPost from '../views/BlogPost.vue';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import UserProfile from '../views/UserProfile.vue';
import UserProfileInfo from '../views/UserProfileInfo.vue';
import UserProfileSettings from '../views/UserProfileSettings.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'BlogList',
        component: BlogList
    },
    //Router động
    {
        path: '/blog/:id',
        name: 'BlogPost',
        component: BlogPost
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile,
        alias: "/me", //Alias router
        children: [
            {
                path: 'info',
                name: 'UserProfileInfo',
                component: UserProfileInfo
            },
            {
                path: 'settings',
                name: 'UserProfileSettings',
                component: UserProfileSettings
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {requiresAuth: true}, //router bảo vệ
    },
];

//Tạo router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

//Router bảo vệ
router.beforeEach((to, from, next) => {
    //Kiểm tra trạng thái đăng nhập từ localStorage
    const isAuthenticated = localStorage.getItem("isAuthenticated")=== "true";

    //Nếu router yêu cầu xác thực và người dùng chưa đăng nhập --> trang đăng nhập
    if(to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
        // đến login
        next({name: "Login"});
    } else {
        //Tiếp tục đến route
        next();
    }
});

export default router;