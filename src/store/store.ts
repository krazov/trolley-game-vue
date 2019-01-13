import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import {
    DispatchWithAction,
    DispatchWithoutPayload,
    DispatchWithPayload,
    RootState
} from '@/meta/store._.meta';
import {
    DILEMMAS_MODULE,
    GAMEPLAY_MODULE,
    MESSAGES_MODULE,
    SCORE_MODULE
} from '@/constants/store.modules';
import { CALCULATION, CHALLENGE, DECISION, IDLE, INITIAL } from '@/constants/gameplay.stages';
import { scoreModule } from './store.score';
import { dilemmasModule } from './store.dilemmas';
import { gameplayModule } from '@/store/store.gameplay';
import { messagesModule } from '@/store/store.messages';
import { ADD_MESSAGE } from '@/constants/messages.store';
import { SET_CHALLENGE, SET_DECISION } from '@/constants/gameplay.store';
import { GENERATE_DILEMMA } from '@/constants/dilemmas.store';
import { gameStage } from '@/store/selectors';
import { dispatchActionWith } from '@/utils/store.action.util';
import { decisionMessage, dilemmaMessage, welcomeMessage } from '@/utils/messages.generators.util';

Vue.use(Vuex);

export const store: Store<RootState> = new Vuex.Store<RootState>({
    modules: {
        [GAMEPLAY_MODULE]: gameplayModule,
        [SCORE_MODULE]: scoreModule,
        [DILEMMAS_MODULE]: dilemmasModule,
        [MESSAGES_MODULE]: messagesModule,
    },
});

const dispatchAction: DispatchWithAction = dispatchActionWith(store);

const dispatchAddMessage: DispatchWithPayload = dispatchAction(MESSAGES_MODULE, ADD_MESSAGE);

const dispatchSetChallenge: DispatchWithoutPayload = dispatchAction(GAMEPLAY_MODULE, SET_CHALLENGE);
const dispatchGenerateDilemma: DispatchWithoutPayload = dispatchAction(DILEMMAS_MODULE, GENERATE_DILEMMA);
const dispatchSetDecision: DispatchWithoutPayload = dispatchAction(GAMEPLAY_MODULE, SET_DECISION);

store.watch(
    gameStage,
    async (currentStage: string) => {
        switch (currentStage) {
        case INITIAL:
            await dispatchAddMessage(welcomeMessage());
            await dispatchSetChallenge();
            break;
        case IDLE:
            await dispatchSetChallenge();
            break;
        case CHALLENGE:
            const dilemma = await dispatchGenerateDilemma();
            await dispatchAddMessage(dilemmaMessage(dilemma));
            await dispatchSetDecision();
            break;
        case DECISION:
            await dispatchAddMessage(decisionMessage());
            // console.log('Decision stage'); // eslint-disable-line
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
