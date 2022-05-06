<template>
  <div id="app">
    <router-view :key="$route.query.id||$route.query.u"/>
  </div>
</template>

<style lang="scss">
</style>
