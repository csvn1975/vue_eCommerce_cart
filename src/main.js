import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/sass/main.scss";
import * as filters from './filters' 

const app = createApp(App)
  .use(store)
  .use(router);
app.mount("#app");


// register global utility filters
Object.keys(filters).forEach(key => {
    var currency = Object.assign(filters[key]);
    app.config.globalProperties.$filters = {
        currency
    };
}) 
