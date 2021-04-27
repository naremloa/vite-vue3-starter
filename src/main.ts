import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import element from './plugins/element';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(element);
app.mount('#app');
