<template>
  <div id="app">
    <h1>Using Font Awesome "Brand" icons in Vue.js</h1>
    <p>Have a cup of coffee: <font-awesome-icon icon="coffee" /></p>
    <p>Have a module of JavaScript: <font-awesome-icon :icon="[ 'fab', 'js' ]" /></p>
    <p>Have a module of Vue.js: <font-awesome-icon :icon="[ 'fab', 'vuejs' ]" /></p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
