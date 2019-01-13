import { Module } from 'vuex';
import { DilemmasState } from '@/meta/store.dilemmas.meta';
import { RootState } from '@/meta/store._.meta';
import { ADD_DILEMMA, GENERATE_DILEMMA, GET_CURRENT_DILEMMA } from '@/constants/dilemmas.store';
import { realTrolleyDilemma } from '@/utils/dilemma.real.util';
import { Dilemma } from '@/meta/dilemma.general.meta';
import { lastOf } from '@/utils/array.general.util';

export const dilemmasModule: Module<DilemmasState, RootState> = {
    namespaced: true,

    state: {
        list: [],
        count: 0,
    },

    getters: {
        [GET_CURRENT_DILEMMA]({ list }: DilemmasState): Dilemma {
            return lastOf(list);
        },
    },

    mutations: {
        [ADD_DILEMMA](state: DilemmasState, { dilemma }): Dilemma {
            state.list.push(dilemma);
            state.count += 1;

            return dilemma
        },
    },

    actions: {
        async [GENERATE_DILEMMA]({ commit }): Promise<Dilemma> {
            const dilemma: Dilemma = realTrolleyDilemma();
            commit(ADD_DILEMMA, { dilemma });

            return dilemma;
        },
    },
};
