<template>
  <div id="app">
    <the-header />
    <div v-if="$nuxt.isOffline" class="layout">
      Sin conexión
    </div>
    <Nuxt v-else />
  </div>
</template>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
