import Vue from "vue";
import Vuex from 'vuex';
import { scoreModule } from "./score.store";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        scoreModule,
    },
});
