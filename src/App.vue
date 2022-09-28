<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <NavigationBar />
    </div>
  </header>

  <RouterView />

</template>

