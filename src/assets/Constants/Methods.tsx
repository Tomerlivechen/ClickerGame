import { Base64 } from "js-base64";
import { Finger, FingerValue, StoredInventory } from "../Types/ButtonTypes";
export const DecodeStorage = (token: string) => {
  const decodedToken = Base64.decode(token);
  const reviver = (_: string, value: unknown) => {
    if (typeof value === "string" && /^-?\d+n$/.test(value)) {
      return BigInt(value.slice(0, -1));
    }
    return value;
  };
  const decodedInventory: StoredInventory = JSON.parse(decodedToken, reviver);
  return decodedInventory;
};

export const EncodeStorage = (storage: StoredInventory) => {
  const JsonInventory = JSON.stringify(storage, (_, value) =>
    typeof value === "bigint" ? value.toString() + "n" : value
  );
  const EncodedToken = Base64.encode(JsonInventory);
  return EncodedToken;
};

export const LargeNumbers = (number: bigint) => {
  const OrderOfMag = Log10BigInt(number);
  let Division: number = 0;
  let Name: string = "";
  if (OrderOfMag >= 3 && OrderOfMag < 6) {
    Division = 3;
    Name = "K";
  }
  if (OrderOfMag >= 6 && OrderOfMag < 9) {
    Division = 6;
    Name = "M";
  }
  if (OrderOfMag >= 9 && OrderOfMag < 12) {
    Division = 9;
    Name = "B";
  }
  if (OrderOfMag >= 12 && OrderOfMag < 15) {
    Division = 12;
    Name = "T";
  }
  if (OrderOfMag >= 15 && OrderOfMag < 18) {
    Division = 15;
    Name = "Qd";
  }
  if (OrderOfMag >= 18 && OrderOfMag < 21) {
    Division = 18;
    Name = "Qt";
  }

  if (OrderOfMag >= 21 && OrderOfMag < 24) {
    Division = 21;
    Name = "Sx";
  }

  if (OrderOfMag >= 24 && OrderOfMag < 27) {
    Division = 24;
    Name = "Sp";
  }
  if (OrderOfMag >= 27 && OrderOfMag < 30) {
    Division = 27;
    Name = "O";
  }
  if (OrderOfMag >= 30 && OrderOfMag < 33) {
    Division = 30;
    Name = "N";
  }
  if (OrderOfMag >= 33 && OrderOfMag < 36) {
    Division = 33;
    Name = "De";
  }
  if (OrderOfMag >= 36 && OrderOfMag < 39) {
    Division = 36;
    Name = "Un";
  }
  if (OrderOfMag >= 39 && OrderOfMag < 42) {
    Division = 39;
    Name = "Du";
  }
  if (OrderOfMag >= 42 && OrderOfMag < 45) {
    Division = 42;
    Name = "Tr";
  }
  if (OrderOfMag >= 45 && OrderOfMag < 48) {
    Division = 45;
    Name = "Qa";
  }
  if (OrderOfMag >= 48 && OrderOfMag < 51) {
    Division = 48;
    Name = "Qi";
  }
  if (OrderOfMag >= 51 && OrderOfMag < 54) {
    Division = 51;
    Name = "Sx";
  }
  if (OrderOfMag >= 54 && OrderOfMag < 57) {
    Division = 54;
    Name = "Sp";
  }
  if (OrderOfMag >= 57 && OrderOfMag < 60) {
    Division = 57;
    Name = "Oc";
  }
  if (OrderOfMag >= 60 && OrderOfMag < 63) {
    Division = 60;
    Name = "Nv";
  }
  if (OrderOfMag >= 63 && OrderOfMag < 66) {
    Division = 63;
    Name = "Vg";
  }
  if (OrderOfMag >= 66 && OrderOfMag < 69) {
    Division = 66;
    Name = "Uv";
  }
  if (OrderOfMag >= 69 && OrderOfMag < 72) {
    Division = 69;
    Name = "Dv";
  }
  if (OrderOfMag >= 72 && OrderOfMag < 75) {
    Division = 72;
    Name = "Tv";
  }
  if (OrderOfMag >= 75 && OrderOfMag < 78) {
    Division = 75;
    Name = "Qav";
  }
  if (OrderOfMag >= 78 && OrderOfMag < 81) {
    Division = 78;
    Name = "Qiv";
  }
  const ViewValue =
    Math.round((Number(number) / Math.pow(10, Division)) * 100.0) / 100.0 +
    Name;
  return ViewValue;
};

export const Log10BigInt = (number: bigint) => {
  const NumToString: string = number.toString();
  const Log10: number = NumToString.length - 1;
  return Log10;
};

export const FingerToFingerValue = (finger: Finger) => {
  const FingerVal: FingerValue = {
    Id: finger.Id,
    name: finger.name,
    PayOff: finger.PayOff,
    ActiveImage: finger.ActiveImage,
  };
  return FingerVal;
};


