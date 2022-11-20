<script>
export default {
    data() {
        return {}
    },
    components: {},
    methods: {},
    computed: {
        state() {
            return this.$store.state.count
        },
    },
}
</script>

<template>
    <main>
        <p>Count: {{ state }}</p>
        <button @click="$store.commit('increment')">Increase</button>
        <button @click="$store.commit('decrement')">Decrease</button>
    </main>
</template>

<style lang="scss">
@import 'assets/styles/sass/main';

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #eaffea;
}
</style>
