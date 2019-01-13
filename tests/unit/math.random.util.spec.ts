import { randomNumberBetween } from '@/utils/math.random.util';

describe('math.random()', () => {
    it('should generate random in given range (both ends inclusive)', () => {
        const min: number = 1;
        const max: number = 10;
        const actual: number = randomNumberBetween(min, max);

        expect(actual).toBeGreaterThanOrEqual(min);
        expect(actual).toBeLessThanOrEqual(max);
    });
});
