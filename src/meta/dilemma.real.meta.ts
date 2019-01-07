export interface RealTrolley {
    type: string;
    upperTrack: number;
    lowerTrack: number;
    // lowerTrackText: string;
    // upperTrackText: string;
    // decisionMsg: string;
}

export type RealTrolleyGenerator = () => RealTrolley;
