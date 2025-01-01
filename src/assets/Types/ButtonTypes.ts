export interface itemAmount {
    name: string;
    Amount: bigint;
    PayOff: bigint;
    StarEffect?: number;
}

export interface itemVals {
    Id: string;
    name: string;
    price: bigint;
    visibleValue: bigint;
    PriceIncrease:  number;
    PayOff: bigint;
    StarEffect?: number;
    ExtraEffect?: number;
    RequiredSpecial?: Special;
    ActiveImage: string
    HiddenImage: string
    invisibleImage: string
}

export interface Special {
    Id: string;
    name: string;
    price: bigint;
    visibleValue: bigint;
    PayOff: number;
    ExtraEffect: number;
    ActiveImage: string;
    HiddenImage: string;
    invisibleImage: string;

}

export interface FingerVaue {
    Id: string;
    name: string;
    price: bigint;
    PayOff: number;
    ActiveImage: string
    HiddenImage: string
}

export interface Finger {
    Id: string;
    name: string;
    price: bigint;
    PayOff: number;
    PriceIncrease: 10,
    PayOffIncrease: 2,
    ActiveImage: string
    HiddenImage: string
}

export interface Dimension {
    Id: string;
    name: string;
    PayOff: number;
    ActiveImage: string
}

export interface StoredInventory {
    ItemList: itemAmount[];
    SpecialList: Special[];
    FingerList: FingerVaue[];
    DimensionList: Dimension[];
    HasStar: boolean
}