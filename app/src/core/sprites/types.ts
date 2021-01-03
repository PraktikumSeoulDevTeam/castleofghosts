export interface AssetVariant {
    x: number;
    y: number;
}

export type AssetMap = Record<string, Sprite>;
export type AssetVariants = Record<string, AssetVariant>;

export interface Sprite {
    image?: HTMLImageElement;
    posx: number;
    posy: number;
    width: number;
    height: number;
}
