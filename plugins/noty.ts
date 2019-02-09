import Vue from 'vue'
import VueNoty from 'vuejs-noty'

Vue.use(VueNoty, {
  theme: 'sunset',
  timeout: 3000,
  progressBar: true,
  layout: 'bottomRight'
})
