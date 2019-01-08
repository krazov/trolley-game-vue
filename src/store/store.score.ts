import { Module } from 'vuex';
import { ScoreState } from '@/meta/store.score.meta';
import { RootState } from '@/meta/store._.meta';
import { storeConfig } from '@/config/config.store';

export const scoreModule: Module<ScoreState, RootState> = {
    namespaced: storeConfig.isNamespaced,
    state: {
        utils: 0,
        kantpoints: 0,
    },
    mutations: {},
    actions: {},
};
