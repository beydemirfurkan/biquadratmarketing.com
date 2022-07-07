import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@/assets/css/style.css'


createApp(App).use(router).mount('#app')


