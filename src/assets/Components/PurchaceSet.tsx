import { UniverseItems } from "../Constants/Items";
import { ItemCell } from "./ItemCell";
import { YScollFrame } from "./YScollFrame";

const PurchaceSet = () => {
  return (
    <>
    <YScollFrame tailwind={""} title={"Components"} >
      <div className="flex flex-col space-y-2">
        {UniverseItems.map((Item, index) => (
          <div key={index}>
            <ItemCell {...Item} />
          </div>
        ))}
      </div></YScollFrame>
    </>
  );
};

export { PurchaceSet };
