import { GameplayState } from '@/meta/store.gameplay.meta';
import { ScoreState } from '@/meta/store.score.meta';
import { DilemmasState } from '@/meta/store.dilemmas.meta';
import { IndexedInterface } from '@/meta/generic.meta';
import { Store } from 'vuex';

interface Modules {
    gameplay: GameplayState;
    score: ScoreState;
    dilemmas: DilemmasState;
}

export interface RootState extends IndexedInterface {
    modules: Modules;
}

export type DispatchWithPayload = (payload?: any) => Promise<any>;
export type DispatchWithoutPayload = () => Promise<any>;
export type DispatchWithAction = (namespace: string, actionLabel: string) => DispatchWithPayload | DispatchWithoutPayload;
export type DispatchWithStore = (store: Store<RootState>) => DispatchWithAction
