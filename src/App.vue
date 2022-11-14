<script lang="ts">
import { defineComponent } from 'vue'
import Todos from '@components/Todos.vue'

export default defineComponent({
  data() {
    return {
    }
  },
  components: {
    Todos
  },
  methods: {
  },
  computed: {
  }
})
</script>

<template>
  <main>
    <Todos/>
  </main>
</template>

<style lang="scss">
  @import "assets/styles/sass/main";

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #eaffea;
  }
</style>
