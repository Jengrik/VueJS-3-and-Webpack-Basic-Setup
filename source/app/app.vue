<template>
  <header>
    <h1>VueJS 3 and Webpack Basic Setup</h1>
    <p>{{message}}</p>
  </header>
  <p>This project presents a basic template with the minimum configuration that VueJS 3 and WebPack should have in the client side.</p>
  <p>Additionally, some examples of Vue features will be presented.</p>
  <p>Remember, all the code could be found here: <a href="https://github.com/Jengrik/VueJS-3-and-Webpack-Basic-Setup" target="_blank" rel="noopener noreferrer">VueJS 3 and Webpack Basic Setup Repository</a></p>
  <customDirective />
</template>

<script>
  import customDirectiveComponent from './components/custom-directive-component.vue'
  import { useAppStore } from './app-store'
  import { mapStores } from 'pinia'

  export default {
    name: 'VueApp',
    components: {
      customDirective: customDirectiveComponent
    },
    props: {
      message: String,
    },
    data() {
      return {
      };
    },
    computed: {
      ...mapStores(useAppStore)
    }
  }
</script>

<style>
  /* h1 {
    text-align: center;
  }
  p {
    text-align: right;
  } */
</style>