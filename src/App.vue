<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/nav/NavBar.vue';

const links = [
  {id: 1, name: 'Home', path: '/'},
  {id: 2, name: 'About Us', path: '/about'},
  {id: 3, name: 'Tasks', path: '/tasks'}
]

</script>

<template>
  <div class="">
    <NavBar title="task manager" :links="links" />
  </div>
  <RouterView />
</template>

<style scoped>

</style>
