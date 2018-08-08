import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faCoffee, faSpinner, faWrench, faAmbulance, faEdit, faCircle, faCheck, faChessQueen,
    faPlus, faEquals, faArrowRight, faPencilAlt, faComment, faHeadphones, faSquare,
    faCalendar, faCertificate, faEnvelope, faTimes, faBookmark, faHeart, faPlay,
    faSun, faMoon, faStar
} from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
    faCoffee, faSpinner, faWrench, faAmbulance, faSquare,
    faEdit, faCircle, faCheck, faChessQueen, faHeadphones,
    faPlus, faEquals, faArrowRight, faPencilAlt, faComment,
    faCalendar, faCertificate, faEnvelope, faTimes, faBookmark,
    faHeart, faPlay, faSun, faMoon, faStar,
    faJs, faVuejs, faFacebookF);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
});
