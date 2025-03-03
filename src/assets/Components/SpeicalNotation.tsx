import { useContext, useEffect, useState } from "react";
import { Achievement, Dimension, Special } from "../Types/ButtonTypes";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { Tooltip } from "react-bootstrap";
import { Frame } from "./Frame";

const SpeicalNotation = (item: Special|Achievement|Dimension) => {
  const { inventory } = useContext(InventoryContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inventory) {
      const existingItemIndex = inventory.SpecialList.findIndex(
        (i) => i.name === item.name
      );
      if (existingItemIndex !== -1) {
        setVisible(true);
      }
    }
  }, [inventory]);

  useEffect(() => {
    if (inventory) {
      const existingItemIndex = inventory.DimensionList.findIndex(
        (i) => i.name === item.name
      );
      if (existingItemIndex !== -1) {
        setVisible(true);
      }
    }
  }, [inventory]);

  useEffect(() => {
    if (inventory) {
      const existingItemIndex = inventory.Achievements.findIndex(
        (i) => i.name === item.name
      );
      if (existingItemIndex !== -1) {
        setVisible(true);
      }
    }
  }, [inventory]);

  return (
    <>
      {visible && (
        <Frame tailwind="border-teal-700 bg-teal-500 w-16">
          <Tooltip title={item.name}>
            <div className="flex flex-row ">
              <img
                src={item.ActiveImage}
                className={` h-14 w-14 rounded-lg object-cover`}
                alt={item.name}
              />
            </div>
          </Tooltip>
        </Frame>
      )}
    </>
  );
};

export { SpeicalNotation };
