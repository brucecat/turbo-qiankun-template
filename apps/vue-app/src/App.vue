<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="app">
    <h2>vue 子应用</h2>
    <div class="menu">
      <router-link to="/">list</router-link>
      <router-link to="/detail">detail</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  padding: 24px;
}
.menu {
  margin-bottom: 24px;
}
.menu a {
  margin-right: 24px;
}
</style>
