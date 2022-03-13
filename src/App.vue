<template>
  <PartnersComponent/>
</template>

<script>
import PartnersComponent from './components/PartnersComponent.vue'

export default {
  name: 'App',
  components: {
    PartnersComponent
  }
}
</script>

<style>
@font-face {
  font-family: "Inter";
  src: local("Inter"),
   url('./fonts/Inter-Regular.ttf') format("truetype");
  font-weight: normal;
}
@font-face {
  font-family: "Inter";
  src: local("Inter"),
   url('./fonts/Inter-Light.ttf') format("truetype");
  font-weight: 300;
}
#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F7F7FC;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
