import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './styles/app.css';
import VueSimpleAlert from "vue-simple-alert";

Vue.config.productionTip = false

new Vue({
  VueSimpleAlert,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
