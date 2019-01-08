import { Module } from 'vuex';
import { DilemmasState } from '@/meta/store.dilemmas.meta';
import { storeConfig } from '@/config/config.store';
import { RootState } from '@/meta/store._.meta';

export const dilemmasModule: Module<DilemmasState, RootState> = {
    namespaced: storeConfig.isNamespaced,
    state: {
        list: [],
        count: 0,
    },
    mutations: {},
    actions: {},
};
