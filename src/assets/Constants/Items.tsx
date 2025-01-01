import { itemVals } from "../Types/ButtonTypes";
import { SpecialNames } from "./Special";

const Lepton: itemVals = {
  Id: "",
  name: "Lepton",
  price: 9n,
  visibleValue: 0n,
  PriceIncrease: 0.05,
  PayOff: 1n,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737111/1-Lepton_hv1r2a.png",
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
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737111/2-Boson_y5uyfo.png",
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
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/3-Atom_gkxv3q.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Gas: itemVals = {
  Id: "",
  name: "Gas",
  price: 12000n,
  visibleValue: 48000n,
  PriceIncrease: 0.05,
  PayOff: 4800n,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737111/4-Gas_kczidz.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Dust: itemVals = {
  Id: "",
  name: "Dust",
  price: 480000n,
  visibleValue: 192000n,
  PriceIncrease: 0.05,
  PayOff: 384000n,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/5-Dust_gwmxus.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Water: itemVals = {
  Id: "",
  name: "Water",
  price: 9600000n,
  visibleValue: 3840000n,
  PriceIncrease: 0.05,
  PayOff: 7680000n,
  RequiredSpecial: SpecialNames.Chemistry,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/6-Water_xvq3la.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Rocks: itemVals = {
  Id: "",
  name: "Rocks",
  price: 1920000000n,
  visibleValue: 76800000n,
  PriceIncrease: 0.05,
  PayOff: 172800000n,
  RequiredSpecial: SpecialNames.Electromagnetism,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/7-Rock_z5fwso.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Astroids: itemVals = {
  Id: "",
  name: "Astroids",
  price: 115200000000n,
  visibleValue: 4608000000n,
  PriceIncrease: 0.05,
  PayOff: 3456000000n,
  RequiredSpecial: SpecialNames.Gravity,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/8-Astroid_fbkjum.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Commet: itemVals = {
  Id: "",
  name: "Commet",
  price: 9216000000000n,
  visibleValue: 368640000000n,
  PriceIncrease: 0.05,
  PayOff: 737280000000n,
  StarEffect: 2.2,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/b_rgb:000000/c_pad,ar_1:1/v1735737112/9-Commet_i6pduh.png",
  HiddenImage: "",
  invisibleImage: "",
};

const DwarfPlanet: itemVals = {
  Id: "",
  name: "Dwarf Planet",
  price: 737280000000000n,
  visibleValue: 29491200000000n,
  PriceIncrease: 0.05,
  PayOff: 58982400000000n,
  StarEffect: 2.2,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737113/10-DwarfP_rxu9je.png",
  HiddenImage: "",
  invisibleImage: "",
};

const RockyPlanet: itemVals = {
  Id: "",
  name: "Rocky Planet",
  price: 14745600000000000n,
  visibleValue: 589824000000000n,
  PriceIncrease: 0.05,
  PayOff: 1179648000000000n,
  StarEffect: 2.2,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737113/11-RockP_bkdhrl.png",
  HiddenImage: "",
  invisibleImage: "",
};

const IcePlanet: itemVals = {
  Id: "",
  name: "IcePlanet",
  price: 589824000000000000n,
  visibleValue: 23592960000000000n,
  PriceIncrease: 0.05,
  PayOff: 29491200000000000n,
  StarEffect: 2.2,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737113/12-IceP_ozifki.png",
  HiddenImage: "",
  invisibleImage: "",
};

const GasPlanet: itemVals = {
  Id: "",
  name: "GasPlanet",
  price: 53084160000000000000n,
  visibleValue: 2123366400000000000n,
  PriceIncrease: 0.05,
  PayOff: 4246732800000000000n,
  StarEffect: 2.2,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737113/13-GasP_i95ibg.png",
  HiddenImage: "",
  invisibleImage: "",
};

const BrownDwarf: itemVals = {
  Id: "",
  name: "Brown Dwarf",
  price: 530841600000000000000n,
  visibleValue: 21233664000000000000n,
  PriceIncrease: 0.05,
  PayOff: 5308416000000000000n,
  StarEffect: 2.2,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737114/14-DwarfS_gsjwza.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarM: itemVals = {
  Id: "",
  name: "M type Star",
  price: 5308416000000000000000n,
  visibleValue: 212336640000000000000n,
  PriceIncrease: 0.05,
  PayOff: 318504960000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737115/15-StarM_cykysk.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarK: itemVals = {
  Id: "",
  name: "K type Star",
  price: 212336640000000000000000n,
  visibleValue: 8493465600000000000000n,
  PriceIncrease: 0.05,
  PayOff: 16986931200000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737115/16-StarK_p4jl2n.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarG: itemVals = {
  Id: "",
  name: "G type Star",
  price: 8493465600000000000000000n,
  visibleValue: 339738624000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 424673280000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737116/17-StarG_gasa1s.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarF: itemVals = {
  Id: "",
  name: "F type Star",
  price: 339738624000000000000000000n,
  visibleValue: 13589544960000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 3397386240000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737116/18-StarF_umgqs2.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarA: itemVals = {
  Id: "",
  name: "A type Star",
  price: 3397386240000000000000000000n,
  visibleValue: 135895449600000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 203843174400000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737117/19-StarA_snjkwv.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarB: itemVals = {
  Id: "",
  name: "B type Star",
  price: 135895449600000000000000000000n,
  visibleValue: 5435817984000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 2717908992000000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737117/20-StarB_soxh9c.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarO: itemVals = {
  Id: "",
  name: "O type Star",
  price: 5435817984000000000000000000000n,
  visibleValue: 217432719360000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 326149079040000000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737118/21-StarO_agnbst.png",
  HiddenImage: "",
  invisibleImage: "",
};

const NurtonStar: itemVals = {
  Id: "",
  name: "Nurton Star",
  price: 163074539520000000000000000000000n,
  visibleValue: 6522981580800000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 13045963161600000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity2,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737119/22-NeutronStar_ul1zid.png",
  HiddenImage: "",
  invisibleImage: "",
};

const BlackHole: itemVals = {
  Id: "",
  name: "Black Hole",
  price: 1630745395200000000000000000000000n,
  visibleValue: 65229815808000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 48922361856000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737119/23-BlackHole_w2hx4k.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Quasar: itemVals = {
  Id: "",
  name: "Quasar",
  price: 32614907904000000000000000000000000n,
  visibleValue: 1304596316160000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 1956894474240000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737120/24-Quasar_wirwu0.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Nebula: itemVals = {
  Id: "",
  name: "Nebula",
  price: 652298158080000000000000000000000000n,
  visibleValue: 26091926323200000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 32614907904000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737120/25-Nebula_r5syb3.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Galaxy: itemVals = {
  Id: "",
  name: "Galaxy",
  price: 39137889484800000000000000000000000000n,
  visibleValue: 1565515579392000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 3131031158784000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737121/26-Galaxy_kvz9hm.png",
  HiddenImage: "",
  invisibleImage: "",
};

const GalexyCluster: itemVals = {
  Id: "",
  name: "Galexy Cluster",
  price: 1174136684544000000000000000000000000000n,
  visibleValue: 46965467381760000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 46965467381760000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737124/27-Galaxy_Cluster_vape0s.png",
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
  ActiveImage: "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737124/27-Galaxy_Cluster_vape0s.png",
  HiddenImage: "",
  invisibleImage: "",
};

export const UniverseItems = [
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
];
