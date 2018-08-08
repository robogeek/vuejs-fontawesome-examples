<template>
  <div id="app">
    <link rel="stylesheet" 
        href="node_modules/@fortawesome/fontawesome-free/css/all.css">
    <h1>Using Font Awesome "Brand" icons in Vue.js</h1>
    <p>Have a cup of coffee: <i class="fas fa-coffee"></i> </p>
    <p>Have a module of JavaScript: <i class="fab fa-js"></i> </p>
    <p>Have a module of Vue.js: <i class="fab fa-vuejs"></i> </p>
    <h1>Using Font Awesome by referencing SVG files</h1>
    <p>Have a cup of coffee: 
          <svg>
            <use xlink:href="node_modules/@fortawesome/fontawesome-free/sprites/solid.svg#coffee"></use>
          </svg>
    </p>
    <p>Have a module of JavaScript:
          <svg>
            <use xlink:href="node_modules/@fortawesome/fontawesome-free/sprites/brands.svg#js"></use>
          </svg></p>
    <p>Have a module of Vue.js: 
          <svg>
            <use xlink:href="node_modules/@fortawesome/fontawesome-free/sprites/brands.svg#vuejs"></use>
          </svg></p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
