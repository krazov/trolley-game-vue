import { Module } from 'vuex';
import { DilemmasState } from '@/meta/store.dilemmas.meta';
import { storeConfig } from '@/config/config.store';
import { RootState } from '@/meta/store._.meta';
import { ADD_DILEMMA, GENERATE_DILEMMA } from '@/constants/dilemmas.store';
import { realTrolleyDilemma } from '@/utils/dilemma.real.util';

export const dilemmasModule: Module<DilemmasState, RootState> = {
    namespaced: storeConfig.isNamespaced,

    state: {
        list: [],
        count: 0,
    },

    mutations: {
        [ADD_DILEMMA](state: DilemmasState, dilemma): void {
            state.list.push(dilemma);
            state.count += 1;
        },
    },

    actions: {
        [GENERATE_DILEMMA]({ commit }): void {
            commit(ADD_DILEMMA, realTrolleyDilemma());
        },
    },
};
