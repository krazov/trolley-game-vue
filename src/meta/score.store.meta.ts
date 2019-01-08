import { Dilemma } from "./dilemma.general.meta";

interface Points {
    utils: number;
    kantpoints: number;
}

interface Dilemmas {
    list: Dilemma[];
    count: number;
}

export interface Score {
    points: Points;
    dilemmas: Dilemmas;
    // weights: ???
}
