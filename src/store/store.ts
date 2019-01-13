import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { RootState } from '@/meta/store._.meta';
import { DILEMMAS, GAMEPLAY, SCORE } from '@/constants/store.modules';
import { CALCULATION, CHALLENGE, IDLE, INITIAL } from '@/constants/gameplay.stages';
import { scoreModule } from './store.score';
import { dilemmasModule } from './store.dilemmas';
import { gameplayModule } from '@/store/store.gameplay';
import { gameStage } from '@/store/selectors';
import { SET_CHALLENGE, SET_DECISION } from '@/constants/gameplay.store';
import { GENERATE_DILEMMA } from '@/constants/dilemmas.store';
import { dispatchActionWith } from '@/utils/store.action.util';

Vue.use(Vuex);

export const store: Store<RootState> = new Vuex.Store<RootState>({
    modules: {
        [GAMEPLAY]: gameplayModule,
        [SCORE]: scoreModule,
        [DILEMMAS]: dilemmasModule,
    },
});

const dispatchAction = dispatchActionWith(store);

store.watch(
    gameStage,
    async (currentStage: string) => {
        switch (currentStage) {
        case INITIAL:
        case IDLE:
            await dispatchAction(GAMEPLAY, SET_CHALLENGE);
            break;
        case CHALLENGE:
            await dispatchAction(DILEMMAS, GENERATE_DILEMMA);
            await dispatchAction(GAMEPLAY, SET_DECISION);
            break;
        case CALCULATION:
            console.log('Calculation stage'); // eslint-disable-line
            break;
        default:
            throw Error('Stage name not recognized');
        }
    },
    { immediate: true },
);
