import './main.css'

import { createApp } from 'vue'
import App from './views/App.vue'

//vue router
import router from './routes'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown,faBars,faHome,faListCheck,faBox,faScroll,faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faCaretDown,faFacebook,faInstagram,faYoutube,faBars,faHome,faListCheck,faBox,faScroll,faAddressCard);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
