import { SpecialNamesList } from "../Constants/Special";
import { SpecialCell } from "./SpecialCell";
import { YScollFrame } from "./YScollFrame";

const SpecialSet = () => {
  return (
    <>
      <YScollFrame tailwind={"h-full"} title={"Aspects"}>
        {SpecialNamesList.map((Item, index) => (
          <div key={index}>
            <SpecialCell {...Item} />
          </div>
        ))}
      </YScollFrame>
    </>
  );
};

export { SpecialSet };
