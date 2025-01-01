import { UniverseItems } from "../Constants/Items";
import { ItemCell } from "./ItemCell";

const PurchaceSet = () => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        {UniverseItems.map((Item, index) => (
          <div key={index}>
            <ItemCell {...Item} />
          </div>
        ))}
      </div>
    </>
  );
};

export { PurchaceSet };
