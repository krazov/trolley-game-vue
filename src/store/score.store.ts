import { StoreOptions } from 'vuex';
import { Score } from '../meta/score.store.meta';

export const scoreModule: StoreOptions<Score> = {
    state: {
        points: {
            utils: 0,
            kantpoints: 0,
        },
        // TODO: move to dilemmas module; this was copied from ClojureScript
        dilemmas: {
            list: [],
            count: 0,
        },
        // weights: [1],
    },
    mutations: {},
    actions: {},
};
