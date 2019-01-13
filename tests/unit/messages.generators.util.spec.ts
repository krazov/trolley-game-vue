import { Message } from '@/meta/message.meta';
import { DECISION_TYPE, DILEMMA_TYPE, WELCOME_TYPE } from '@/constants/messages.types';
import { decisionMessage, dilemmaMessage, welcomeMessage } from '@/utils/messages.generators.util';
import { realTrolleyDilemma } from '@/utils/dilemma.real.util';

describe('welcomeMessage()', () => {
    it('should return welcome message', () => {
        const actual: Message = welcomeMessage();
        const expected: Message = { type: WELCOME_TYPE };

        expect(actual).toMatchObject(expected);
        expect(actual.data).not.toBe(null);
    });
});

describe('dilemmaMessage()', () => {
    it('should return dilemma message', () => {
        const realTrolley = realTrolleyDilemma();

        const actual: Message = dilemmaMessage(realTrolley);
        const expected: Message = { type: DILEMMA_TYPE, data: realTrolley };

        expect(actual).toMatchObject(expected);
        expect(actual.data).not.toBe(null);
    });
});

describe('decisionMessage()', () => {
    it('should return decision message', () => {
        const actual: Message = decisionMessage();
        const expected: Message = { type: DECISION_TYPE };

        expect(actual).toMatchObject(expected);
        expect(actual.data).not.toBe(null);
    })
});
