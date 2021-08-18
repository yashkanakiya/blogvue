import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia, PiniaPlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'
// import Vuelidate from 'vuelidate'


Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'https://gorest.co.in/public/'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common = {'Authorization': `Bearer ${'286dab38c44ed569871e8337b06912ec49cac8a7135f2deefbf999e580edda79'}`} //Token
export default axios;

Vue.use(PiniaPlugin)
const pinia = createPinia()

Vue.use(VueCompositionAPI)

// Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  pinia,
}).$mount('#app')
