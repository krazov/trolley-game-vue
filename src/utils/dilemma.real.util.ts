import { REAL_TROLLEY } from "../constants/dilemma.types";
import { RealTrolleyGenerator } from "../meta/dilemma.real.meta";
import { randomNumberBetween } from "./math.random.util";

export const realTrolleyDilemma: RealTrolleyGenerator =
    () =>
        ({
            type: REAL_TROLLEY,
            upperTrack: randomNumberBetween(0, 1),
            lowerTrack: randomNumberBetween(1, 10),
        });
