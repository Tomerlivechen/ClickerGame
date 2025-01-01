import { itemVals } from "../Types/ButtonTypes";
import { SpecialNames } from "./Special";

const Lepton: itemVals = {
  Id: "",
  name: "Lepton",
  price: 9n,
  visibleValue: 0n,
  PriceIncrease: 0.05,
  PayOff: 1n,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737111/1-Lepton_hv1r2a.png",
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
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737111/2-Boson_y5uyfo.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Atoms: itemVals = {
  Id: "",
  name: "Atoms",
  price: 3000n,
  visibleValue: 0n,
  PriceIncrease: 0.05,
  PayOff: 100n,
  RequiredSpecial: SpecialNames.StringForce,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/3-Atom_gkxv3q.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Gas: itemVals = {
  Id: "",
  name: "Gas",
  price: 120000n,
  visibleValue: 60000n,
  PriceIncrease: 0.05,
  PayOff: 1000n,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737111/4-Gas_kczidz.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Dust: itemVals = {
  Id: "",
  name: "Dust",
  price: 237000n,
  visibleValue: 118500n,
  PriceIncrease: 0.05,
  PayOff: 10000n,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/5-Dust_gwmxus.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Water: itemVals = {
  Id: "",
  name: "Water",
  price: 165900000n,
  visibleValue: 82950000n,
  PriceIncrease: 0.05,
  PayOff: 100000n,
  RequiredSpecial: SpecialNames.Chemistry,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/6-Water_xvq3la.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Rocks: itemVals = {
  Id: "",
  name: "Rocks",
  price: 4977000000n,
  visibleValue: 2488500000n,
  PriceIncrease: 0.05,
  PayOff: 1000000n,
  RequiredSpecial: SpecialNames.Electromagnetism,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/7-Rock_z5fwso.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Astroids: itemVals = {
  Id: "",
  name: "Astroids",
  price: 199080000000n,
  visibleValue: 99540000000n,
  PriceIncrease: 0.05,
  PayOff: 10000000n,
  RequiredSpecial: SpecialNames.Gravity,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737112/8-Astroid_fbkjum.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Commet: itemVals = {
  Id: "",
  name: "Commet",
  price: 1990800000000n,
  visibleValue: 995400000000n,
  PriceIncrease: 0.05,
  PayOff: 100000000n,
  StarEffect: 2.2,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/b_rgb:000000/c_pad,ar_1:1/v1735737112/9-Commet_i6pduh.png",
  HiddenImage: "",
  invisibleImage: "",
};

const DwarfPlanet: itemVals = {
  Id: "",
  name: "Dwarf Planet",
  price: 179172000000000n,
  visibleValue: 89586000000000n,
  PriceIncrease: 0.05,
  PayOff: 1000000000n,
  StarEffect: 2.2,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737113/10-DwarfP_rxu9je.png",
  HiddenImage: "",
  invisibleImage: "",
};

const RockyPlanet: itemVals = {
  Id: "",
  name: "Rocky Planet",
  price: 10750320000000000n,
  visibleValue: 5375160000000000n,
  PriceIncrease: 0.05,
  PayOff: 10000000000n,
  StarEffect: 2.2,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737113/11-RockP_bkdhrl.png",
  HiddenImage: "",
  invisibleImage: "",
};

const IcePlanet: itemVals = {
  Id: "",
  name: "IcePlanet",
  price: 537516000000000000n,
  visibleValue: 268758000000000000n,
  PriceIncrease: 0.05,
  PayOff: 100000000000n,
  StarEffect: 2.2,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737113/12-IceP_ozifki.png",
  HiddenImage: "",
  invisibleImage: "",
};

const GasPlanet: itemVals = {
  Id: "",
  name: "GasPlanet",
  price: 48376440000000000000n,
  visibleValue: 24188220000000000000n,
  PriceIncrease: 0.05,
  PayOff: 1000000000000n,
  StarEffect: 2.2,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737113/13-GasP_i95ibg.png",
  HiddenImage: "",
  invisibleImage: "",
};

const BrownDwarf: itemVals = {
  Id: "",
  name: "Brown Dwarf",
  price: 3386350800000000000000n,
  visibleValue: 1693175400000000000000n,
  PriceIncrease: 0.05,
  PayOff: 10000000000000n,
  StarEffect: 2.2,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737114/14-DwarfS_gsjwza.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarM: itemVals = {
  Id: "",
  name: "M type Star",
  price: 237044556000000000000000n,
  visibleValue: 118522278000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 100000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737115/15-StarM_cykysk.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarK: itemVals = {
  Id: "",
  name: "K type Star",
  price: 7111336680000000000000000n,
  visibleValue: 3555668340000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 1000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737115/16-StarK_p4jl2n.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarG: itemVals = {
  Id: "",
  name: "G type Star",
  price: 426680200800000000000000000n,
  visibleValue: 213340100400000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 10000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737116/17-StarG_gasa1s.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarF: itemVals = {
  Id: "",
  name: "F type Star",
  price: 34134416064000000000000000000n,
  visibleValue: 17067208032000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 100000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737116/18-StarF_umgqs2.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarA: itemVals = {
  Id: "",
  name: "A type Star",
  price: 341344160640000000000000000000n,
  visibleValue: 170672080320000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 1000000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737117/19-StarA_snjkwv.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarB: itemVals = {
  Id: "",
  name: "B type Star",
  price: 23894091244800000000000000000000n,
  visibleValue: 11947045622400000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 10000000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737117/20-StarB_soxh9c.png",
  HiddenImage: "",
  invisibleImage: "",
};

const StarO: itemVals = {
  Id: "",
  name: "O type Star",
  price: 477881824896000000000000000000000n,
  visibleValue: 238940912448000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 100000000000000000000n,
  RequiredSpecial: SpecialNames.Fusion,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737118/21-StarO_agnbst.png",
  HiddenImage: "",
  invisibleImage: "",
};

const NurtonStar: itemVals = {
  Id: "",
  name: "Nurton Star",
  price: 9557636497920000000000000000000000n,
  visibleValue: 4778818248960000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 1000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity2,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737119/22-NeutronStar_ul1zid.png",
  HiddenImage: "",
  invisibleImage: "",
};

const BlackHole: itemVals = {
  Id: "",
  name: "Black Hole",
  price: 860187284812800000000000000000000000n,
  visibleValue: 430093642406400000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 10000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737119/23-BlackHole_w2hx4k.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Quasar: itemVals = {
  Id: "",
  name: "Quasar",
  price: 43009364240640000000000000000000000000n,
  visibleValue: 21504682120320000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 100000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737120/24-Quasar_wirwu0.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Nebula: itemVals = {
  Id: "",
  name: "Nebula",
  price: 3010655496844800000000000000000000000000n,
  visibleValue: 1505327748422400000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 1000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737120/25-Nebula_r5syb3.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Galaxy: itemVals = {
  Id: "",
  name: "Galaxy",
  price: 120426219873792000000000000000000000000000n,
  visibleValue: 60213109936896000000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 10000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737121/26-Galaxy_kvz9hm.png",
  HiddenImage: "",
  invisibleImage: "",
};

const GalexyCluster: itemVals = {
  Id: "",
  name: "Galexy Cluster",
  price: 9634097589903360000000000000000000000000000n,
  visibleValue: 4817048794951680000000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 100000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737124/27-Galaxy_Cluster_vape0s.png",
  HiddenImage: "",
  invisibleImage: "",
};

const Universe: itemVals = {
  Id: "",
  name: "Universe",
  price: 58706834227200000000000000000000000000000n,
  visibleValue: 23482733690880000000000000000000000000000n,
  PriceIncrease: 0.05,
  PayOff: 1000000000000000000000000000n,
  RequiredSpecial: SpecialNames.Gravity3,
  ActiveImage:
    "https://res.cloudinary.com/dhzndjkjl/image/upload/v1735737124/27-Galaxy_Cluster_vape0s.png",
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
