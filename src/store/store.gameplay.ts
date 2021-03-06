import { Module } from 'vuex';
import { RootState } from '@/meta/store._.meta';
import { GameplayState } from '@/meta/store.gameplay.meta';
import { storeConfig } from '@/config/config.store';
import { CALCULATION, CHALLENGE, DECISION, IDLE, INITIAL } from '@/constants/gameplay.stages';
import { SET_CALCULATION, SET_CHALLENGE, SET_DECISION, SET_IDLE, SET_STAGE } from '@/constants/gameplay.store';

export const gameplayModule: Module<GameplayState, RootState> = {
    namespaced: storeConfig.isNamespaced,
    state: {
        stage: INITIAL,
    },
    mutations: {
        [SET_STAGE](state: GameplayState, stageName: string): void {
            state.stage = stageName;
        }
    },
    actions: {
        [SET_IDLE]({ commit }): void {
            commit(SET_STAGE, IDLE);
        },
        [SET_CHALLENGE]({ commit }): void {
            commit(SET_STAGE, CHALLENGE)
        },
        [SET_DECISION]({ commit }): void {
            commit(SET_STAGE, DECISION);
        },
        [SET_CALCULATION]({ commit }): void {
            commit(SET_STAGE, CALCULATION);
        },
    },
};
