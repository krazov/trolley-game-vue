<template>
    <div>
        <p
            v-for="paragraph in paragraphs"
        >{{ paragraph }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Dilemma } from '@/meta/dilemma.general.meta';

    export default Vue.extend({
        name: 'CurrentDilemma',
        props: {
            dilemma: {
                type: Object as Dilemma,
            },
        },
        computed: {
            paragraphs(): string[] {
                // TODO: extract it the message template util
                return this.dilemma
                    ? [
                        `Type: ${this.dilemma.type}`,
                        `Upper track: ${this.dilemma.upperTrack}`,
                        `Lower track: ${this.dilemma.lowerTrack}`
                    ]
                    : [];
            },
        }
    });
</script>

<style scoped lang="stylus">
    div
        border 1px solid blue
        color navy
</style>
