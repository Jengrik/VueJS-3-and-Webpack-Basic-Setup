//* Imports Necessary Methods from Vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//* Imports the Root Component and Store
import App from './app.vue'
import Directives from '../vue-directives';

//* Creates the application instance
const MountElement = document.querySelector("#bodyVueContainer");
const VueApp = createApp(App, { ...MountElement.firstElementChild.dataset });

//* Installs the store instance as a plugin
VueApp.use(createPinia());

//* Creates a Vue Custom Directive 
VueApp.directive('outer-html', Directives.outerhtml);

//* Mounts the application instance
VueApp.mount('#bodyVueContainer');
