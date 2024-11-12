import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import the router

// Create the Vue instance and attach the router
createApp(App).use(router).mount('#app');
