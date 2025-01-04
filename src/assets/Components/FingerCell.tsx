import { useContext, useEffect, useState } from "react";
import { Finger } from "../Types/ButtonTypes";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { LargeNumbers } from "../Constants/Methods";
import { Frame } from "./Frame";
import { FingerPointer } from "../Constants/Finger";

const FingerCell = () => {
  const initialFinger = FingerPointer;
  const { inventory, enthalpy, addFinger } = useContext(InventoryContext);
  const [currentFinger, setCurrentFinger] = useState(initialFinger);
  const [price, setPrice] = useState(initialFinger.price);
  const [visible, setVisible] = useState(true);
  const [fingerNum, setFingerNum] = useState(0);
  const buyItem = () => {
    if (enthalpy > price && currentFinger) {
      addFinger(currentFinger);
    }
  };

  useEffect(() => {
    if (inventory) {
      const existingFingers = inventory.FingerList.length;
      if (existingFingers <= 20) {
        const newFinger: Finger = {
          Id: initialFinger.Id * existingFingers,
          name: `Finger ${existingFingers}`,
          price: BigInt(Math.pow(10, existingFingers + 1)),
          PayOff: initialFinger.PayOff * 2,
          PriceIncrease: 10,
          PayOffIncrease: 2,
          ActiveImage: initialFinger.ActiveImage,
          HiddenImage: "",
        };

        setCurrentFinger(newFinger);
        setPrice(newFinger.price);
        setFingerNum(Math.log10(Number(newFinger.price)));
      }
      if (existingFingers > 20) {
        setVisible(false);
      }
    }
  }, [inventory]);

  return (
    <>
      {visible && (
        <Frame tailwind="border-teal-700 w-28 lg:w-64 bg-teal-500  hover:bg-teal-300">
          <div
            className="flex flex-col lg:flex-row  p-1 hover:cursor-pointer "
            onClick={() => buyItem()}
          >
            <img
              src={currentFinger.ActiveImage}
              className={`${
                enthalpy > price ? `` : `grayscale`
              } h-24 w-24 rounded-lg object-contain bg-transparent `}
              alt={currentFinger.name}
              style={{
                boxShadow: `0 0 ${5 * fingerNum}px rgba(255, 223, 0, 1), 
                            0 0 ${10 * fingerNum}px rgba(255, 223, 0, 1), 
                            inset 0 0 ${10 * fingerNum}px ${
                  5 * fingerNum
                }px rgba(0, 255, 255, 0.7)`,
              }}
            />
            <div className="flex flex-col ml-1 flex-grow items-center justify-center">
              <h2 className="text-lg font-semibold">{currentFinger.name}</h2>
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

export { FingerCell };
