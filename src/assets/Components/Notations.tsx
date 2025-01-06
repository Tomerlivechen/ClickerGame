import { useContext } from "react";
import { Frame } from "./Frame";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { SpeicalNotation } from "./SpeicalNotation";

const Notations = () => {
  const { inventory } = useContext(InventoryContext);

  return (
    <>
      <Frame tailwind={" font-bold text-xl"}>
        Forces
        <Frame tailwind={"overflow-y-hidden"}>
          <div className="flex flex-row space-x-2 h-22 overflow-x-scroll">
          {inventory?.SpecialList.map((Item, index) => (
              <div key={index}>
                <SpeicalNotation {...Item} />
              </div>
            ))}
                      {inventory?.DimensionList.map((Item, index) => (
              <div key={index}>
                <SpeicalNotation {...Item} />
              </div>
            ))}
            {inventory?.Achievements.map((Item, index) => (
              <div key={index}>
                <SpeicalNotation {...Item} />
              </div>
            ))}
          </div>
        </Frame>
      </Frame>
    </>
  );
};

export { Notations };
