import { REAL_TROLLEY } from "../../src/constants/dilemma.types";
import { RealTrolley } from "../../src/meta/dilemma.real.meta";
import { realTrolleyDilemma } from "../../src/utils/dilemma.real.util";

describe('realTrolleyDilemma()', () => {
    it('should generate real trolley dilemma', () => {
        const actual: RealTrolley = realTrolleyDilemma();

        expect(actual.type).toBe(REAL_TROLLEY);
        expect(actual.upperTrack).toBeGreaterThanOrEqual(0);
        expect(actual.upperTrack).toBeLessThanOrEqual(5);
        expect(actual.lowerTrack).toBeGreaterThanOrEqual(1);
        expect(actual.lowerTrack).toBeLessThanOrEqual(10);
    })
});
