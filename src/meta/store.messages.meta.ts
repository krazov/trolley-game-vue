import { Message } from '@/meta/message.meta';
import { Module } from 'vuex';
import { RootState } from '@/meta/store._.meta';

export interface MessagesState {
    list: Message[];
}

export type MessagesModule = Module<MessagesState, RootState>;
