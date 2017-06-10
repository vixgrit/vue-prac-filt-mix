import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

Vue.filter('countStringCharac', function(word) {
  let length = word.length;
  return `${word} (${length})`;
})

// Vue.mixin({
//   computed: {
//     returnCharacCount() {
//       let length = this.model.length;
//       return `${this.model} (${length})`;
//     }
//   }
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
