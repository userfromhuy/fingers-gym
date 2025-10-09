import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './styles/styles.scss';
import './styles/normalize.scss';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
