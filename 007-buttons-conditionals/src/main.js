import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faCoffee, faCocktail, faGlassMartini, faBeer
} from '@fortawesome/free-solid-svg-icons';
import { 
  faJs, faVuejs, faJava, faPhp, faPython, faCss3, faHtml5 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee, faCocktail, faGlassMartini, faBeer,
      faJs, faVuejs, faJava, faPhp, faPython, faCss3, faHtml5);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
});
