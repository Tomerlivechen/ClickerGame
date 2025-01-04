import { ClickSpace } from "./ClickSpace";
import { FingerSet } from "./FingerSet";
import { Notations } from "./Notations";
import { PurchaceSet } from "./PurchaceSet";
import { SpecialSet } from "./SpecialSet";

const MainComponent = () => {
  return (
    <>
      <div className="flex  lx:h-full mb-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 w-full  ">
          {/* Left half: ClickSpace */}
          <div className="border p-2 w-full  h-fit">
            <ClickSpace />
          </div>

          {/* Right half: Organized components */}
          <div className="grid grid-rows-[auto_auto_1fr] grid-cols-2 gap-4 h-5/6">
            {/* Row 1: Notations (spans both columns) */}
            <div className="col-span-2  ">
              <Notations />
            </div>
            <div className="h-fit ">
              <div className="w-fit  h-[66vh]">
                <PurchaceSet />
              </div>
            </div>
            <div className="flex flex-col h-64 p-2 gap-0">
              <div className="h-64 w-fit">
                <FingerSet />
              </div>
              <div className=" ">
                <div className="w-fit  h-[44vh] ">
                  <SpecialSet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MainComponent };
