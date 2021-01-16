export interface SampleControl {
    sample: 'CLICK' | 'GAME_LOOP' | 'WIN' | 'LOOSE';
    action: 'PLAY' | 'STOP';
}

export interface SampleContainer {
    node: AudioBufferSourceNode;
    startTime?: number;
}
