import { useEffect } from "react";
import { ClickSpace } from "../Components/ClickSpace";

import { FingerSet } from "../Components/FingerSet";
import { Notations } from "../Components/Notations";
import { PurchaceSet } from "../Components/PurchaceSet";
import { SpecialSet } from "../Components/SpecialSet";

const MainPage = () => {

   useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); 

  return (
<div className="grid grid-cols-2 gap-4 p-4">
  {/* Left half: ClickSpace */}
  <div className="border p-2 w-full h-screen">
    <ClickSpace />
  </div>

  {/* Right half: Organized components */}
  <div className="grid grid-rows-[auto_auto_1fr] grid-cols-2 gap-4 h-fit">
    {/* Row 1: Notations (spans both columns) */}
    <div className="col-span-2  ">
      <Notations />
    </div>

   

    <div className="h-fit flex ">
    <div className="flex-1 h-fit border p-2">
    <PurchaceSet />
  </div>
    </div>
    <div className="flex flex-col h-fit p-2 gap-0">
  <div className="h-64">
    <FingerSet />
  </div>
  <div className="flex-1 ">
    <SpecialSet />
  </div>

    </div>
    </div>

</div>

  );
};

export { MainPage };
