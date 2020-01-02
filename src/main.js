import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './components/components';
//css引入
import '@/assets/css/rest.css';

Vue.config.productionTip = false;
new Vue({
  components,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
