export interface itemVals {
    Id: string;
    name: string;
    price: number;
    visible: boolean;
    visibleValue: number;
    PriceIncrease:  number;
    PayOff: number;
    StarEffect?: number;
    ExtraEffect?: number;
    RequiredSpecial?: Special;
    Amount: number;
    ActiveImage: string
    HiddenImage: string
    invisibleImage: string
}

export interface Special {
    Id: string;
    name: string;
    price: number;
    visible: boolean;
    visibleValue: number;
    PayOff: number;
    ExtraEffect: number;
    ActiveImage: string
    HiddenImage: string
    invisibleImage: string
}

export interface Finger {
    Id: string;
    name: string;
    price: number;
    PayOff: number;
    ActiveImage: string
    HiddenImage: string
}

export interface Univers {
    Id: string;
    name: string;
    PayOff: number;
    ActiveImage: string
}