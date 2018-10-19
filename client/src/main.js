import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import twitchExt from './assets/js/twitchExt';
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(twitchExt)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
  	var postParams = {
      tournamentName: 'pulsar-premier-league',
    }

    axios.post('https://smashggcors.us-west-2.elasticbeanstalk.com/tournaments', postParams)
    .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
  }
})
