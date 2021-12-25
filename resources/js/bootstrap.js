window._ = require('lodash');
import {store} from "./plugins/store";
import {router} from "./router";

try {
    require('bootstrap');
} catch (e) {
}


window.dayjs = require('dayjs');
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.axios.defaults.baseURL = "http://127.0.0.1:8000/api";
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.token;

window.axios.interceptors.response.use(
    function (response) {

        store.state.successMessage = response.data.message;
        store.state.flashErro = false;
        store.state.flashSuccess = true;
        return response;
    },
    function (error) {


        store.state.errors = error.response.data;
        store.state.flashSuccess = false;

        store.state.flashErro = false;
        store.state.flashErro = true;



        if (error.response.status===401){
            router.push({path:"/auth/login"});
        }

        return Promise.reject(error);
    }
);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
