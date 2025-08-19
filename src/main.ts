import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import pinia from './store';
import '@arco-design/web-vue/dist/arco.css';
const app = createApp(App);
app.use(pinia);
app.mount('#app');
