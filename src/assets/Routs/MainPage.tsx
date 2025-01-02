import { ClickSpace } from "../Components/ClickSpace";
import { Notations } from "../Components/Notations";
import { PurchaceSet } from "../Components/PurchaceSet";
import { SpecialSet } from "../Components/SpecialSet";

const MainPage = () => {
  return (
    <div className="flex space-x-4">
      <Notations/>
      <ClickSpace />
      <PurchaceSet />
      <SpecialSet />
    </div>
  );
};

export { MainPage };
