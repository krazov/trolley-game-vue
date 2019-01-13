import { lastOf } from '@/utils/array.general.util';

describe('lastOf', () => {
    it('should return last element of the array', () => {
        const array: string[] = ['one', 'two', 'three'];

        const actual: string = lastOf(array);
        const expected: string = 'three';

        expect(actual).toBe(expected);
    });
});
