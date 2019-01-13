<template>
    <current-dilemma
        :dilemma="dilemma"
    ></current-dilemma>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapGetters } from 'vuex';
    import CurrentDilemma from '@/components/CurrentDilemma.vue';
    import { GET_CURRENT_DILEMMA } from '@/constants/dilemmas.store';
    import { DILEMMAS_MODULE } from '@/constants/store.modules';

    export default Vue.extend({
        name: 'CurrentDilemmaContainer',
        components: { CurrentDilemma },

        computed: mapGetters(DILEMMAS_MODULE, {
            dilemma: GET_CURRENT_DILEMMA,
        }),
    });
</script>
