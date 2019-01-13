import { MessagesState, MessagesModule } from '@/meta/store.messages.meta';
import { Message } from '@/meta/message.meta';
import { ADD_MESSAGE } from '@/constants/messages.store';

export const messagesModule: MessagesModule = {
    namespaced: true,

    state: {
        list: [],
    },

    mutations: {
        [ADD_MESSAGE](state: MessagesState, payload: Message): Message {
            state.list.push(payload);
            return payload;
        },
    },

    actions: {
        async [ADD_MESSAGE]({ commit }, payload: Message): Promise<Message> {
            commit(ADD_MESSAGE, payload);
            return payload;
        },
    },
};
