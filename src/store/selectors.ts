import { GAMEPLAY_MODULE } from '@/constants/store.modules';
import { StringSelector } from '@/meta/selectors.types';

// gameplay
export const gameStage: StringSelector = (state) => state[GAMEPLAY_MODULE].stage;
