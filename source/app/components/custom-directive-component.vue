<template>
  <h2>Custom Directives Vue</h2>
  <p>As you know, the <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/api/built-in-directives.html#v-html"><code>v-html</code></a> directive updates the element's innerHTML. In some occasions it will be necessary to update the OuterHTML of the document, so we will create a directive to do it.</p>
  <p></p>
  <div v-outer-html="{ color: 'blue', text: '2023' }"></div>
</template>

<script>
export default {
    name: 'CustomDirectiveComponent',
    data() {
      return {
      };
    },
}
</script>

<style>

</style>