import { useContext, useEffect, useState } from "react";
import { Special } from "../Types/ButtonTypes";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { LargeNumbers } from "../Constants/Methods";
import { Frame } from "./Frame";

const SpecialCell = (item: Special) => {
  const { totalEnthalpy, inventory, enthalpy, addSpecial } = useContext(
    InventoryContext
  );
  const [price] = useState(item.price);
  const [visible, setVisible] = useState(true);

  const buyItem = () => {
    if (enthalpy > price && item) {
      addSpecial(item);
    }
  };

  useEffect(() => {
    if (inventory) {
      const existingItemIndex = inventory.SpecialList.findIndex(
        (i) => i.name === item.name
      );
      if (existingItemIndex !== -1) {
        setVisible(false);
      }
    }
  }, [inventory]);

  return (
    <>
      {totalEnthalpy >= item.visibleValue && visible && (
        <Frame tailwind="border-teal-700 w-52 xl:w-64 bg-teal-500  hover:bg-teal-300">
          <div
            className="flex flex-row  p-1 hover:cursor-pointer"
            onClick={() => buyItem()}
          >
            <img
              src={item.ActiveImage}
              className={`${
                enthalpy > price ? `` : `grayscale`
              } h-20 w-20 rounded-lg object-cover`}
              alt={item.name}
            />
            <div className="flex flex-col ml-1 flex-grow items-center justify-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <h2 className="text-md font-semibold text-violet-700">
                {LargeNumbers(price)}
              </h2>
            </div>
          </div>
        </Frame>
      )}
    </>
  );
};

export { SpecialCell };
