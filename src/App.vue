<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
        <current-dilemma-container></current-dilemma-container>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    // import HelloWorld from './components/HelloWorld.vue';
    import CurrentDilemmaContainer from '@/containers/CurrentDilemmaContainer.vue';

    export default Vue.extend({
        name: 'app',
        components: {
            // HelloWorld,
            CurrentDilemmaContainer,
        },
    });
</script>
<style lang="stylus">
    #app
        color fuchsia
</style>
