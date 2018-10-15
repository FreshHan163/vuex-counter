<template>
  <div class="counter">
    <h1>Count is {{counterVal}}</h1>
  </div>
</template>

<script>
// import bus from '../assets/eventBus.js'
import { mapGetters } from 'vuex'
// import { getCount } from '../store/getter.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      count: 0
    }
  },
  // vuex: {
  //   getters: {
  //     counterVal: getCount
  //   }
  // },
  computed: mapGetters({
    counterVal: 'getCount'
  })
  // created () {
  //   bus.$on('add', () => {
  //     this.count++
  //   })
  //   bus.$on('cut', () => {
  //     this.count--
  //   })
  // }
}
</script>
