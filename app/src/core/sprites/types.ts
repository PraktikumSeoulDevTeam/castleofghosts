
export interface AssetVariant {
    x: number;
    y: number;
}

export type AssetVariants = {[key: string]: AssetVariant};

export interface Sprite {
    image?: HTMLImageElement;
    posx: number;
    posy: number;
    width: number;
    height: number;
}
