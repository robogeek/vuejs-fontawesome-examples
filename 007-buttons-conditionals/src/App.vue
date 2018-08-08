<template>
  <div id="app">
    <h1>Icon Buttons and Conditional Icons</h1>
    <p>Drink: {{ drink }}
        <font-awesome-icon icon="coffee" 
                           size="4x" v-if="drink == 'Coffee'" />
        <font-awesome-icon icon="cocktail" 
                           size="4x" v-if="drink == 'Cocktail'" />
        <font-awesome-icon icon="glass-martini" 
                           size="4x" v-if="drink == 'Martini'" />
        <font-awesome-icon icon="beer" 
                           size="4x" v-if="drink == 'Beer'" />
    </p>
    <p>Language: {{ language }}
        <font-awesome-icon :icon="[ 'fab', 'js' ]" 
                           size="4x" v-if="language == 'JavaScript'"  />
        <font-awesome-icon :icon="[ 'fab', 'vuejs' ]" 
                           size="4x" v-if="language == 'Vue.js'" />
        <font-awesome-icon :icon="[ 'fab', 'java' ]" 
                           size="4x" v-if="language == 'Java'" />
        <font-awesome-icon :icon="[ 'fab', 'php' ]"
                           size="4x" v-if="language == 'PHP'" />
        <font-awesome-icon :icon="[ 'fab', 'python' ]"
                           size="4x" v-if="language == 'Python'" />
        <font-awesome-icon :icon="[ 'fab', 'css3' ]"
                           size="4x" v-if="language == 'CSS 3'" />
        <font-awesome-icon :icon="[ 'fab', 'html5' ]"
                           size="4x" v-if="language == 'HTML 5'" />
    </p>
    <p>
      <button @click="drink = 'Coffee'"> 
        <font-awesome-icon icon="coffee" size="4x" />
      </button>
      <button @click="drink = 'Cocktail'"> 
        <font-awesome-icon icon="cocktail" size="4x" />
      </button>
      <button @click="drink = 'Martini'"> 
        <font-awesome-icon icon="glass-martini" size="4x" />
      </button>
      <button @click="drink = 'Beer'"> 
        <font-awesome-icon icon="beer" size="4x" />
      </button>
    </p>
    <p>
      <button @click="language='JavaScript'">
        <font-awesome-icon :icon="[ 'fab', 'js' ]" size="4x" />
      </button>
      <button @click="language='Vue.js'">
        <font-awesome-icon :icon="[ 'fab', 'vuejs' ]" size="4x" />
      </button>
      <button @click="language='Java'">
        <font-awesome-icon :icon="[ 'fab', 'java' ]" size="4x" />
      </button>
      <button @click="language='PHP'">
        <font-awesome-icon :icon="[ 'fab', 'php' ]" size="4x" />
      </button>
      <button @click="language='Python'">
        <font-awesome-icon :icon="[ 'fab', 'python' ]" size="4x" />
      </button>
      <button @click="language='CSS 3'">
        <font-awesome-icon :icon="[ 'fab', 'css3' ]" size="4x" />
      </button>
      <button @click="language='HTML 5'">
        <font-awesome-icon :icon="[ 'fab', 'html5' ]" size="4x" />
      </button>
    </p>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drink: "", language: ""
    }
  }
}
</script>

<style>
</style>
