import { createContext, ReactNode, useEffect, useState } from "react";
import {
  Achievement,
  Dimension,
  Finger,
  itemAmount,
  itemVals,
  Special,
  StoredInventory,
} from "../Types/ButtonTypes";
import {
  DecodeStorage,
  EncodeStorage,
  FingerToFingerValue,
} from "../Constants/Methods";
import { ConfirmRestart, showToast } from "../Constants/Alerts";
import { NextDimensions } from "../Constants/Dimension";

const initialValues = {
  InventoryString: localStorage.getItem("ClickerInventory")?.toString() ?? null,
  Enthalpy: localStorage.getItem("ClickerEnthalpy")?.toString() ?? null,
  TotalEnthalpy: localStorage.getItem("TotalEnthalpy")?.toString() ?? null,
};

const BaseInventoryString: StoredInventory = {
  ItemList: [],
  SpecialList: [],
  FingerList: [
    {
      Id: 0,
      name: "Finger0",
      PayOff: 1,
      ActiveImage: "",
    },
  ],
  DimensionList: [],
  HasStar: false,
  Achievements: [],
  Time: Date.now(),
};

const defaultValues = {
  DefaultInventory: BaseInventoryString,
  DefaultEnthalpy: 0n,
};

const InventoryContext = createContext<{
  inventory: StoredInventory | undefined;
  enthalpy: bigint;
  totalEnthalpy: bigint;
  addPerSec: bigint;
  perClick: bigint;
  clickOn: () => void;
  addInvItem: (item: itemVals, price: bigint) => void;
  addSpecial: (special: Special) => void;
  addAchievement: (achievement: Achievement) => void;
  Reset: (NewDimention: Dimension) => void;
  addFinger: (finger: Finger) => void;
  UseEnthalpy: (amount: bigint) => void;
}>({
  inventory: undefined,
  enthalpy: 0n,
  totalEnthalpy: 0n,
  addPerSec: 0n,
  perClick: 0n,
  clickOn: () => {},
  addInvItem: () => {},
  addSpecial: () => {},
  addAchievement: () => {},
  Reset: () => {},
  addFinger: () => {},
  UseEnthalpy: () => {},
});

const InventoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inventory, setInventory] = useState<StoredInventory>(
    defaultValues.DefaultInventory
  );
  const [enthalpy, setEnthalpy] = useState<bigint>(
    defaultValues.DefaultEnthalpy
  );
  const [totalEnthalpy, setTotalEnthalpy] = useState<bigint>(
    defaultValues.DefaultEnthalpy
  );
  const [addPerSec, setAddPerSec] = useState<bigint>(0n);
  const [perClick, setPerClick] = useState<bigint>(0n);
  const [higherThanTen, setHigherThanTen] = useState<boolean>(false);
  const [timePast, setTimePast]= useState<number>(0);

  useEffect(() => {
    if (initialValues.Enthalpy) {
      setEnthalpy(BigInt(initialValues.Enthalpy));
    } else {
      setEnthalpy(defaultValues.DefaultEnthalpy);
    }
    if (initialValues.TotalEnthalpy) {
      setTotalEnthalpy(BigInt(initialValues.TotalEnthalpy));
    } else {
      setTotalEnthalpy(defaultValues.DefaultEnthalpy);
    }
    if (initialValues.InventoryString) {
      setInventory(DecodeStorage(initialValues.InventoryString));
      const TimeNow = Date.now() - Number(DecodeStorage(initialValues.InventoryString).Time)
      setTimePast(TimeNow)
    } else {
      setInventory(defaultValues.DefaultInventory);
    }
  }, []);

useEffect(()=> {
if (timePast>0)
{
  if (timePast>2000){
  showToast(`You've been out for ${Math.floor(timePast / 1000)} seconds don't worry, the universe kept turning.`, "success")
  }
  for (let i=0; i<timePast/1000; i++){
  AddEnthalpy()
  }
  setTimePast(0)
}

},[timePast])


  useEffect(() => {
    localStorage.setItem("ClickerEnthalpy", enthalpy.toString());
  }, [enthalpy]);
  useEffect(() => {
    localStorage.setItem("TotalEnthalpy", totalEnthalpy.toString());
  }, [totalEnthalpy]);
  useEffect(() => {
    if (inventory) {
      localStorage.setItem("ClickerInventory", EncodeStorage(inventory));
    }
  }, [inventory]);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        AddEnthalpy();
        updateTime();
      },
      higherThanTen ? 100 : 1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [enthalpy]);


  const updateTime = () => {
    setInventory((prev) => ({
      ...prev,
      Time: Date.now(),
    }));
  }


  const InitilzeValues = () => {
    setEnthalpy(defaultValues.DefaultEnthalpy);
    setTotalEnthalpy(defaultValues.DefaultEnthalpy);
    setInventory(defaultValues.DefaultInventory);
  };

  const ClearLocalStorage = () => {
    localStorage.removeItem("ClickerEnthalpy");
    localStorage.removeItem("TotalEnthalpy");
    localStorage.removeItem("ClickerInventory");
  };

  const clickOn = () => {
    let fingerValue: bigint = 1n;
    inventory?.FingerList.forEach((FingerList) => {
      fingerValue = fingerValue * BigInt(FingerList.PayOff);
    });
    setEnthalpy((prev) => prev + fingerValue);
    setTotalEnthalpy((prev) => prev + fingerValue);
  };

const addAchievement = (achievement: Achievement) => {
  setInventory((prev) => ({
    ...prev,
    Achievements: [...prev.Achievements, achievement],
  }));
  console.log(inventory?.Achievements.map(item => item));
}


  useEffect(() => {
    let fingerValue: bigint = 1n;
    inventory?.FingerList.forEach((FingerList) => {
      fingerValue = fingerValue * BigInt(FingerList.PayOff);
    });
    setPerClick(fingerValue);
  }, [inventory]);

  const AddEnthalpy = () => {
    let AddEnthalpy: bigint = 0n;
    let MultiplyEnthalpy: bigint = 1n;
    const level = BigInt(Math.pow(2,inventory.DimensionList.length))
    if (inventory?.HasStar) {
      inventory?.ItemList.forEach((ItemList) => {
        AddEnthalpy =
          AddEnthalpy +
          ItemList.Amount * ItemList.PayOff * BigInt(ItemList.StarEffect ?? 1n);
      });
    } else {
      if (!inventory?.HasStar) {
        inventory?.ItemList.forEach((ItemList) => {
          AddEnthalpy =
            AddEnthalpy + BigInt(ItemList.Amount) * BigInt(ItemList.PayOff);
        });
      }
    }
    if (inventory?.DimensionList && inventory.DimensionList.length > 0) {
      inventory?.DimensionList.forEach((DimensionList) => {
        MultiplyEnthalpy = MultiplyEnthalpy * BigInt(DimensionList.PayOff);
      });
    }
    if (inventory?.SpecialList && inventory.SpecialList.length > 0) {
      inventory?.SpecialList.forEach((SpecialList) => {
        MultiplyEnthalpy = MultiplyEnthalpy * BigInt(SpecialList.PayOff);
      });
    }

    if (MultiplyEnthalpy > 1) {
      setAddPerSec(AddEnthalpy * MultiplyEnthalpy  * level);
      setEnthalpy(
        (prev) =>
          prev + (AddEnthalpy * MultiplyEnthalpy * level) / (higherThanTen ? 10n : 1n)
      );
      setTotalEnthalpy(
        (prev) =>
          prev + (AddEnthalpy * MultiplyEnthalpy * level) / (higherThanTen ? 10n : 1n)
      );
    } else {
      setAddPerSec(AddEnthalpy  * level);
      setEnthalpy((prev) => prev + (AddEnthalpy * level) / (higherThanTen ? 10n : 1n));
      setTotalEnthalpy(
        (prev) => prev + (AddEnthalpy * level) / (higherThanTen ? 10n : 1n)
      );
    }
    ;
  };

  useEffect(() => {
    if (addPerSec > 10) {
      setHigherThanTen(true);
    }
  }, [addPerSec]);

  const RestGame = async (message:string) => {
   const confirm = await ConfirmRestart(message)
   if (confirm) {
    InitilzeValues();
    ClearLocalStorage();
    window.location.reload();
   }
   return confirm
  };

  const addStar = () => {
    if (!inventory.HasStar) {
      setInventory((prev) => ({
        ...prev,
        HasStar: true,
      }));
    }
  };

  const addInvItem = (item: itemVals, price: bigint) => {
    if (item.name.includes("Star") && !inventory.HasStar) {
      addStar();
    }
    const existingItemIndex = inventory.ItemList.findIndex(
      (i) => i.name === item.name
    );
    if (existingItemIndex !== -1) {
      setInventory((prev) => {
        const updatedItemList = [...prev.ItemList];
        updatedItemList[existingItemIndex] = {
          ...updatedItemList[existingItemIndex],
          Amount: updatedItemList[existingItemIndex].Amount + 1n,
        };

        return {
          ...prev,
          ItemList: updatedItemList,
        };
      });
    } else {
      const newItem: itemAmount = {
        name: item.name,
        Amount: 1n,
        PayOff: item.PayOff,
      };

      setInventory((prev) => ({
        ...prev,
        ItemList: [...prev.ItemList, newItem],
      }));
    }

    UseEnthalpy(price);
  };

  const AscendGame = async () =>{
    const level = inventory.DimensionList.length
    const Dimension = [...inventory.DimensionList,NextDimensions[level]]
    const confirm = await RestGame("ascend")
    if (confirm){
    setInventory((prev) => ({
      ...prev,
      DimensionList: [...Dimension],
    }));
  }
  }


  const addSpecial = (special: Special) => {
    if (special.name.includes("Reset") ) {
      RestGame("restart the game");}
     else if (special.name.includes("Ascend")) {
        AscendGame();
    } else {
      setInventory((prev) => ({
        ...prev,
        SpecialList: [...prev.SpecialList, special],
      }));
      UseEnthalpy(special.price);
    }
  };

  const addFinger = (finger: Finger) => {
    setInventory((prev) => ({
      ...prev,
      FingerList: [...prev.FingerList, FingerToFingerValue(finger)],
    }));
    UseEnthalpy(finger.price);
  };

  const Reset = (NewDimention: Dimension) => {
    setInventory((prev) => ({
      ...BaseInventoryString,
      DimensionList: [...prev.DimensionList, NewDimention],
    }));
  };

  const UseEnthalpy = (amount: bigint) => {
    if (enthalpy > amount) {
      const newEnthalpy = enthalpy - amount;
      setEnthalpy(newEnthalpy);
    }
  };

  return (
    <InventoryContext.Provider
      value={{
        perClick,
        addPerSec,
        totalEnthalpy,
        inventory,
        enthalpy,
        addAchievement,
        clickOn,
        addInvItem,
        addSpecial,
        Reset,
        addFinger,
        UseEnthalpy,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };
