import { Dilemma } from '@/meta/dilemma.general.meta';

type MessageData = Dilemma | any;

export interface Message {
    type: string;
    data?: MessageData;
}

export type MessageCoreGenerator = (type: string, data?: MessageData) => Message;

export type MessageGenerator = (data?: MessageData) => Message;
