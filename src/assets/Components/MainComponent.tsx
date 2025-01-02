import { ClickSpace } from "./ClickSpace";
import { FingerSet } from "./FingerSet";
import { Notations } from "./Notations";
import { PurchaceSet } from "./PurchaceSet";
import { SpecialSet } from "./SpecialSet";

const MainComponent  = () => {
  return (
    <>
    <div className="flex h-full ">
<div className="grid grid-cols-2 gap-4 p-4 w-full  ">
  {/* Left half: ClickSpace */}
  <div className="border p-2 w-full h-screen">
    <ClickSpace />
  </div>

  {/* Right half: Organized components */}
  <div className="grid grid-rows-[auto_auto_1fr] grid-cols-2 gap-4 h-5/6">
    {/* Row 1: Notations (spans both columns) */}
    <div className="col-span-2  ">
      <Notations />
    </div>
    <div className="h-5/6 flex ">
    <div className="flex-1 h-full border p-2">
    <PurchaceSet />
  </div>
    </div>
    <div className="flex flex-col h-fit p-2 gap-0">
  <div className="h-64">
    <FingerSet />
  </div>
  <div className="flex-1 h-full ">
    <SpecialSet />
  </div>

    </div>
    </div>

</div>
</div>


    </>
  );
};

export { MainComponent };
