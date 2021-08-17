import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'https://gorest.co.in/public/'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common = {'Authorization': `Bearer ${'286dab38c44ed569871e8337b06912ec49cac8a7135f2deefbf999e580edda79'}`}
export default axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
