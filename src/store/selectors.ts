import { GAMEPLAY } from '@/constants/store.modules';
import { StringSelector } from '@/meta/selectors.types';

// gameplay
export const gameStage: StringSelector = (state) => state[GAMEPLAY].stage;
