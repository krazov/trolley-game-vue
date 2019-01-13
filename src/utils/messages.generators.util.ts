// export const WELCOME_TYPE: string = 'welcome';
// export const DILEMMA_TYPE: string = 'dilemma';
// export const DECISION_TYPE: string = 'decision';
// export const CALCULATION_TYPE: string = 'calculation';
// export const UPDATE_TYPE: string = 'update';

import { DECISION_TYPE, DILEMMA_TYPE, WELCOME_TYPE } from '@/constants/messages.types';
import { MessageCoreGenerator, MessageGenerator } from '@/meta/message.meta';

const message: MessageCoreGenerator = (type, data) => ({
    type,
    ...(data !== undefined ? { data } : null),
});

export const welcomeMessage: MessageGenerator = () => message(WELCOME_TYPE);
export const dilemmaMessage: MessageGenerator = (data) => message(DILEMMA_TYPE, data);
export const decisionMessage: MessageGenerator = () => message(DECISION_TYPE);

export const calculationMessage = () => '';

export const updateMessage = () => '';
