<template>
  <div id="app">
    <topbar></topbar>
    <HelloWorld v-bind:welcome="welcome">  </HelloWorld>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import topbar from './components/TopBar.vue'

export default {
  name: 'app',
  data(){
    return{
      welcome:"i pramod welcome you all to this group"
    }
  },
  components: {
    HelloWorld,
    topbar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}
</style>
