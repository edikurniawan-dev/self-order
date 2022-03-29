import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
dom.watch();
import store from './store/itemsProducts';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
