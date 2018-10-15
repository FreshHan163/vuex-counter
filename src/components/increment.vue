<template>
  <div class="increment">
    <button @click="add">+1</button>
    <button @click="cut">-1</button>
  </div>
</template>

<script>
// import bus from '../assets/eventBus.js'
// import { addCounter } from '../store/action'
import { mapActions } from 'vuex'

export default {
  name: 'increment',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // vuex: {
  //   // 类似method中的方法，可以用this.add调用该函数
  //   actions: {
  //     add: addCounter
  //   }
  // },
  methods: {
    ...mapActions({
      add: 'addCounter',
      cut: 'decreCounter'
    })
    // add () {
    //   // console.log('add')
    //   // bus.$emit('add')
    // },
    // cut () {
    //   console.log('cut')
    //   bus.$emit('cut')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-size: 20px;
  color: white;
  padding: 5px 10px;
  margin: 0 10px;
  border-radius: 5px;
  border: 0;
  background-color: cornflowerblue;
}
</style>
