import { useContext, useEffect, useState } from "react";
import { Special } from "../Types/ButtonTypes";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { Tooltip } from "react-bootstrap";
import { Frame } from "./Frame";

const SpeicalNotation = (item: Special) => {
  const { inventory } = useContext(
    InventoryContext
  );
  const [visible, setVisible] = useState(false);



  useEffect(() => {
    if (inventory) {
      const existingItemIndex = inventory.SpecialList.findIndex(
        (i) => i.name === item.name
      );
      if (existingItemIndex !== -1) {
        console.log(item.name);
        setVisible(true);
      }
    }
  }, [inventory]);

  return (
    <>
      {visible && (
        <Frame tailwind="border-teal-700 bg-teal-500">
            <Tooltip title={item.name}  >
          <div
            className="flex flex-row  p-1">
            <img
              src={item.ActiveImage}
              className={` h-12 w-12 rounded-lg object-cover`}
              alt={item.name}
            />
            </div></Tooltip>
        </Frame>
      )}
    </>
  );
};

export { SpeicalNotation };
