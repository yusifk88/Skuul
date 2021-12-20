import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "Dashboard",
        component: () => import('./pages/Dashboard')
    },
    {
      path: '/auth',
      redirect:'/auth/login'
    },
    {
        path: '/auth',
        component: () => import('./pages/Authentication'),
        children: [
            {
                path: '',
                component: () => import('./pages/Login')
            }, {
                path: 'login',
                name: 'Login',
                component: () => import('./pages/Login')
            },
            {
                path: 'signup',
                name: 'Signup',
                component: () => import('./pages/SignUp')
            },
        ]
    }

];

export const router = new VueRouter({
    routes,
    mode: 'history'
});
