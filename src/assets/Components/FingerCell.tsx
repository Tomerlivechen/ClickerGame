import { useContext, useEffect, useState } from "react";
import { Finger, FingerValue } from "../Types/ButtonTypes";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { LargeNumbers } from "../Constants/Methods";
import { Frame } from "./Frame";
import { FingerPointer } from "../Constants/Finger";



const FingerCell = () => {
    const initialFinger = FingerPointer
  const {  inventory, enthalpy, addFinger } = useContext(
    InventoryContext
  );
  const [currentFinger, setCurrentFinger] = useState(
    initialFinger
  );
  const [price,setPrice] = useState(initialFinger.price);
  const [visible, setVisible] = useState(true);

  const buyItem = () => {
    if (enthalpy > price && currentFinger) {
        addFinger(currentFinger);
    }
  };

  useEffect(() => {
    if (inventory) {
      const existingFingers = inventory.FingerList.length;
      if (existingFingers<=20) {      const newFinger : Finger = {
          Id: initialFinger.Id*existingFingers,
          name: `Finger ${existingFingers}`,
          price: BigInt(Math.pow(10, existingFingers+1)),
          PayOff: initialFinger.PayOff*2,
          PriceIncrease: 10,
          PayOffIncrease: 2,
          ActiveImage: initialFinger.ActiveImage,
          HiddenImage: ""
      }
    
      setCurrentFinger(newFinger)
      setPrice(newFinger.price)
      }
    }
    
  }, [inventory]);

  return (
    <>
      {visible && (
        <Frame tailwind="border-teal-700 w-64 bg-teal-500">
          <div
            className="flex flex-row  p-1 hover:cursor-pointer"
            onClick={() => buyItem()}
          >
            <img
              src={currentFinger.ActiveImage}
              className={`${
                enthalpy > price ? `` : `grayscale`
              } h-20 w-20 rounded-lg object-cover shadow-glow-${currentFinger.Id}`}
              alt={currentFinger.name}
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
