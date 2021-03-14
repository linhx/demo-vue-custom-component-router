import vueCustomElement from 'vue-custom-element'
import Vue from 'vue'
import VueRouter from 'vue-router'
import DemoElement from './DemoElement.vue';
import Home from './Home.vue';

Vue.use(VueRouter)

Vue.use(vueCustomElement);

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
  ]
});

Vue.customElement('widget-vue', {
  router,
  render: h => h(DemoElement)
});
