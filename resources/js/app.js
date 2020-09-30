import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './components/App.vue';
import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import store from './store';
import $ from 'jquery';
import VTooltip from 'v-tooltip';


window.$ = window.jQuery = require('jquery');
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VTooltip);
 
//vue-toaster
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';
 
Vue.use(Toaster, {timeout: 2000});
 
const router = new VueRouter({
    // mode: 'history',
    // history: true,
    // mode: 'hash',

    routes: [
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    }]
});
 

router.beforeEach((to, from, next) => {
 
    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        // redirect to login page
        next({ name: 'login' })
        return
    }
 
    // if logged in redirect to dashboard
    if(to.path === '/login' && store.state.isLoggedIn) {
        next({ name: 'dashboard' })
        return
    }
 
    next()
});
// new Vue(App).$mount('#app');
new Vue({
    mode: "history",
    // mode: 'hash',
    router,
    store,
    el: '#app',
    render: h => h(App),
})