<template>
  <div id="app">
    <div id="nav">
    <TheNavigation/>
</div>
    <router-view/>
  </div>
</template>

<script>

import TheNavigation from '@/components/TheNavigation'

export default {
  name: 'app',
  components: {
    TheNavigation
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
