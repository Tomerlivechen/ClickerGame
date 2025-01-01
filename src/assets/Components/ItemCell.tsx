import { useContext, useEffect, useState } from "react";
import { itemVals } from "../Types/ButtonTypes";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { LargeNumbers } from "../Constants/Methods";
import { Frame } from "./Frame";

const ItemCell = (item: itemVals) => {
  const { totalEnthalpy, inventory, enthalpy, addInvItem } = useContext(
    InventoryContext
  );
  const [price, setPrice] = useState(item.price);
  const [currentAmount, setCurrentAmount] = useState(0n);
  const [requiermentsMet, setRequiermentsMet] = useState(false);

  const buyItem = () => {
    if (enthalpy > price && item && requiermentsMet) {
      addInvItem(item, price);
    }
  };

  useEffect(() => {
    if (item.RequiredSpecial) {
      if (inventory) {
        const existingItemIndex = inventory.SpecialList.findIndex(
          (i) => i.name === item.RequiredSpecial?.name
        );
        if (existingItemIndex !== -1) {
          setRequiermentsMet(true);
        }
      }
    } else {
      setRequiermentsMet(true);
    }
  }, [inventory]);

  useEffect(() => {
    if (inventory) {
      const existingItemIndex = inventory.ItemList.findIndex(
        (i) => i.name === item.name
      );
      if (existingItemIndex !== -1) {
        const InventoryList = [...inventory.ItemList];
        const InventoryAmount = InventoryList[existingItemIndex];
        setCurrentAmount(BigInt(InventoryAmount.Amount) || 0n);
      }
    }
  }, [inventory]);

  useEffect(() => {
    if (item.price && item.PriceIncrease) {
      setPrice(
        (item.price *
          BigInt(
            Math.floor((item.PriceIncrease * Number(currentAmount) + 1) * 100)
          )) /
          100n
      );
    }
  }, [currentAmount]);

  return (
    <>
      {totalEnthalpy >= item.visibleValue && (
        <Frame tailwind="border-teal-700 w-64 bg-teal-500">
          <div
            className="flex flex-row  p-1 hover:cursor-pointer"
            onClick={() => buyItem()}
          >
            <img
              src={item.ActiveImage}
              className={`${
                enthalpy > price && requiermentsMet ? `` : `grayscale`
              } h-20 w-20 rounded-lg object-cover`}
              alt={item.name}
            />
            <div className="flex flex-col ml-1 flex-grow items-center justify-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <h2 className="text-md font-semibold text-violet-700">
                {LargeNumbers(price)}
              </h2>
            </div>
            <div className="flex items-center justify-end ">
              <h2 className="text-lg font-bold text-right p-4 ml-6">
                {LargeNumbers(currentAmount)}
              </h2>
            </div>{" "}
          </div>
        </Frame>
      )}
    </>
  );
};

export { ItemCell };
