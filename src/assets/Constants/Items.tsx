import { itemVals } from "../Types/ButtonTypes";
import { SpecialNames } from "./Special";

const Lepton: itemVals = {
  Id: "",
  name: "Lepton",
  price: 9n,
  visibleValue: 0n,
  PriceIncrease: 0.05,
  PayOff: 1n,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Boson: itemVals = {
  Id: "",
  name: "Boson",
  price: 100n,
  visibleValue: 0n,
  PriceIncrease: 0.05,
  PayOff: 10n,
  RequiredSpecial: SpecialNames.WeakForce,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Atoms: itemVals = {
  Id: "",
  name: "Atoms",
  price: 3000n,
  visibleValue: 0n,
  PriceIncrease: 0.05,
  PayOff: 150n,
  RequiredSpecial: SpecialNames.StringForce,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Gas: itemVals = {
  Id: "",
  name: "Gas",
  price: 120000n,
  visibleValue: 480000n,
  PriceIncrease: 0.05,
  PayOff: 4800n,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Dust: itemVals = {
  Id: "",
  name: "Dust",
  price: 4800000n,
  visibleValue: 1920000n,
  PriceIncrease: 0.05,
  PayOff: 384000n,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Water: itemVals = {
  Id: "",
  name: "Water",
  price: 96000000n,
  visibleValue: 38400000n,
  PriceIncrease: 0.05,
  PayOff: 7680000n,
  RequiredSpecial: SpecialNames.Chemistry,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Rocks: itemVals = {
  Id: "",
  name: "Rocks",
  price: 1920000000n,
  visibleValue: 768000000n,
  PriceIncrease: 0.05,
  PayOff: 172800000n,
  RequiredSpecial: SpecialNames.Electromagnetism,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Astroids: itemVals = {
  Id: "",
  name: "Astroids",
  price: 115200000000n,
  visibleValue: 46080000000n,
  PriceIncrease: 0.05,
  PayOff: 3456000000n,
  RequiredSpecial: SpecialNames.Gravity,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Commet: itemVals = {
  Id: "",
  name: "Commet",
  price: 9216000000000n,
  visibleValue: 3686400000000n,
  PriceIncrease: 0.05,
  PayOff: 737280000000n,
  StarEffect: 2.2,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const DwarfPlanet: itemVals = {
  Id: "",
  name: "Dwarf Planet",
  price: 737280000000000n,
  visibleValue: 294912000000000n,
  PriceIncrease: 0.05,
  PayOff: 58982400000000n,
  StarEffect: 2.2,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const RockyPlanet: itemVals = {
  Id: "",
  name: "Rocky Planet",
  price: 14745600000000000n,
  visibleValue: 5898240000000000n,
  PriceIncrease: 0.05,
  PayOff: 1179648000000000n,
  StarEffect: 2.2,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const IcePlanet: itemVals = {
  Id: "",
  name: "IcePlanet",
  price: 589824000000000000n,
  visibleValue: 235929600000000000n,
  PriceIncrease: 0.05,
  PayOff: 29491200000000000n,
  StarEffect: 2.2,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const GasPlanet: itemVals = {
  Id: "",
  name: "GasPlanet",
  price: 53084160000000000000n,
  visibleValue: 21233664000000000000n,
  PriceIncrease: 0.05,
  PayOff: 4246732800000000000n,
  StarEffect: 2.2,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const BrownDwarf: itemVals = {
  Id: "",
  name: "Brown Dwarf",
  price: 530841600000000000000n,
  visibleValue: 212336640000000000000n,
  PriceIncrease: 0.05,
  PayOff: 5308416000000000000n,
  StarEffect: 2.2,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const StarM: itemVals = {
  Id: "",
  name: "M type Star",
  price: 5308416000000000000000n,
  visibleValue: 2123366400000000000000n,
  PriceIncrease: 0.05,
  PayOff: 318504960000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const StarK: itemVals = {
  Id: "",
  name: "K type Star",
  price: 212336640000000000000000n,
  visibleValue: 84934656000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 16986931200000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const StarG: itemVals = {
  Id: "",
  name: "G type Star",
  price: 8493465600000000000000000n,
  visibleValue: 3397386240000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 424673280000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const StarF: itemVals = {
  Id: "",
  name: "F type Star",
  price: 339738624000000000000000000n,
  visibleValue: 135895449600000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 3397386240000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const StarA: itemVals = {
  Id: "",
  name: "A type Star",
  price: 3397386240000000000000000000n,
  visibleValue: 1358954496000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 203843174400000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const StarB: itemVals = {
  Id: "",
  name: "B type Star",
  price: 135895449600000000000000000000n,
  visibleValue: 54358179840000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 2717908992000000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const StarO: itemVals = {
  Id: "",
  name: "O type Star",
  price: 5435817984000000000000000000000n,
  visibleValue: 2174327193600000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 326149079040000000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const NurtonStar: itemVals = {
  Id: "",
  name: "Nurton Star",
  price: 163074539520000000000000000000000n,
  visibleValue: 65229815808000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 13045963161600000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity2,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const BlackHole: itemVals = {
  Id: "",
  name: "Black Hole",
  price: 1630745395200000000000000000000000n,
  visibleValue: 652298158080000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 48922361856000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Quasar: itemVals = {
  Id: "",
  name: "Quasar",
  price: 32614907904000000000000000000000000n,
  visibleValue: 13045963161600000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 1956894474240000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Nebula: itemVals = {
  Id: "",
  name: "Nebula",
  price: 652298158080000000000000000000000000n,
  visibleValue: 260919263232000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 32614907904000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Galaxy: itemVals = {
  Id: "",
  name: "Galaxy",
  price: 39137889484800000000000000000000000000n,
  visibleValue: 15655155793920000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 3131031158784000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const GalexyCluster: itemVals = {
  Id: "",
  name: "Galexy Cluster",
  price: 1174136684544000000000000000000000000000n,
  visibleValue: 469654673817600000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 46965467381760000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

const Universe: itemVals = {
  Id: "",
  name: "Universe",
  price: 58706834227200000000000000000000000000000n,
  visibleValue: 23482733690880000000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 587068342272000000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "",
  HiddenImage: "",
  invisibleImage: "",
};

export const UniverseItems = {
  Lepton,
  Boson,
  Atoms,
  Gas,
  Dust,
  Water,
  Rocks,
  Astroids,
  Commet,
  DwarfPlanet,
  RockyPlanet,
  IcePlanet,
  GasPlanet,
  BrownDwarf,
  StarM,
  StarK,
  StarG,
  StarF,
  StarA,
  StarB,
  StarO,
  NurtonStar,
  BlackHole,
  Quasar,
  Nebula,
  Galaxy,
  GalexyCluster,
  Universe,
};
