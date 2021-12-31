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
        path: '/grades',
        name: "Grades",
        component: () => import('./pages/grades')
    },
    {
        path: '/classes',
        name: "Classes",
        component: () => import('./pages/classes')
    },
    {
        path: '/subjects',
        name: "Subjects",
        component: () => import('./pages/subjects')
    },
    {
        path: '/students',
        name: "Students",
        component: () => import('./pages/students')
    },
    {
        path: '/teachers',
        name: "Teachers",
        component: () => import('./pages/teachers')
    },
    {
        path: '/teachers/:id',
        name: "Teachers",
        component: () => import('./pages/teachers/preview')
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
