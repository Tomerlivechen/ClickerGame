import { ClickSpace } from "../Components/ClickSpace";
import { PurchaceSet } from "../Components/PurchaceSet";
import { SpecialSet } from "../Components/SpecialSet";

const MainPage = () => {
  return (
    <div className="flex space-x-4">
      <ClickSpace />
      <PurchaceSet />
      <SpecialSet />
    </div>
  );
};

export { MainPage };
