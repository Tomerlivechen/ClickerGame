import { SpecialNamesList } from "../Constants/Special";
import { SpecialCell } from "./SpecialCell";

const SpecialSet = () => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        {SpecialNamesList.map((Item, index) => (
          <div key={index}>
            <SpecialCell {...Item} />
          </div>
        ))}
      </div>
    </>
  );
};

export { SpecialSet };
