import { RootState } from '@/meta/store._.meta';

export type BooleanSelector = (state: RootState) => boolean;
export type StringSelector = (state: RootState) => string;
