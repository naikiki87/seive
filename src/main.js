// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

function test2() {
  console.log("It's test 2");
}

/*
var fs = require('fs');
console.log("fs : " + fs);
fs.readFile('exam.txt', 'utf8', function(error, data) {
  console.log(data);
});
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
