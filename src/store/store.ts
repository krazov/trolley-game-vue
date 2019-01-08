import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { RootState } from '@/meta/store._.meta';
import { DILEMMAS, GAMEPLAY, SCORE } from '@/constants/store.modules';
import { CALCULATION, DECISION, IDLE } from '@/constants/gameplay.stages';
import { scoreModule } from './store.score';
import { dilemmasModule } from './store.dilemmas';
import { gameplayModule } from '@/store/store.gameplay';
import { gameStage } from '@/store/selectors';
import { SET_DECISION } from '@/constants/gameplay.actions';

Vue.use(Vuex);

export const store: Store<RootState> = new Vuex.Store<RootState>({
    modules: {
        [GAMEPLAY]: gameplayModule,
        [SCORE]: scoreModule,
        [DILEMMAS]: dilemmasModule,
    },
});

console.log('Store', store);

store.watch(
    gameStage,
    async (currentStage: string) => {
        switch (currentStage) {
        case IDLE:
            await store.dispatch(
                GAMEPLAY + '/' + SET_DECISION,
                null,
                { root: true }
            );
            break;
        case DECISION:
            console.log('Decision stage'); // eslint-disable-line
            break;
        case CALCULATION:
            console.log('Calculation stage'); // eslint-disable-line
            break;
        default:
            throw Error('Stage name not recognized');
        }
    },
    {
        immediate: true,
    },
);
