import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import axios from 'axios';

createApp(App).use(router).mount('#app')

axios.get('https://projektwebapps-backend-1.onrender.com')
    .then(response => {
        // Handle successful response
        console.log(response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
    });