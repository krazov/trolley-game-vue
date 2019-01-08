import { action } from '@/utils/store.action.util';

describe('store.action()', () => {
    it('should create namespaced action label', () => {
        const actual = action('test', 'Go for it');
        const expected = 'test/Go for it';

        expect(actual).toBe(expected);
    });
});
