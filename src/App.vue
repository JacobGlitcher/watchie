<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  components: {},
  methods: {
    ...mapMutations('CounterModule', ['SET_COUNT']),
    ...mapActions('CounterModule', ['increaseCount']),
  },
  computed: {
    ...mapGetters('CounterModule', ['getCounterState']),
  },
}
</script>

<template>
  <main>
    <p>Count: {{ getCounterState }}</p>
    <button @click="increaseCount(2)">click me</button>
  </main>
</template>

<style lang="scss">
@import 'assets/styles/sass/main';

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #eaffea;
}
</style>
