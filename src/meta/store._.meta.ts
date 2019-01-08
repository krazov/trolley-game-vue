import { GameplayState } from '@/meta/store.gameplay.meta';
import { ScoreState } from '@/meta/store.score.meta';
import { DilemmasState } from '@/meta/store.dilemmas.meta';
import { IndexedInterface } from '@/meta/generic.meta';

interface Modules {
    gameplay: GameplayState;
    score: ScoreState;
    dilemmas: DilemmasState;
}

export interface RootState extends IndexedInterface {
    modules: Modules;
}
