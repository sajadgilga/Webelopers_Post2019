<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <b-navbar type="dark" variant="dark" toggleable="sm" fixed>
      <b-navbar-brand>
        <img src="./assets/logo.png" alt="Webelopers 2019" width="100"/>
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="back">
          بازگشت
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view> </router-view>
  </div>
</template>

<script>
import router from '@/router/index'
export default {
  name: 'App',
  methods: {
    back () {
      router.back()
    }
  }
}
</script>

<style>
#app {
  padding: 0;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url("assets/black-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}
</style>
