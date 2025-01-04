import { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { LargeNumbers } from "../Constants/Methods";
import { BoundlessExpanse } from "./BoundlessExpanse";

const ClickSpace = () => {
  const { perClick, addPerSec, enthalpy, clickOn } = useContext(
    InventoryContext
  );
  const [addSec, setAddsec] = useState<bigint>(addPerSec);
  useEffect(() => {
    if (addPerSec) {
      setAddsec(addPerSec);
    }
  }, [addPerSec]);

  return (
    <>
      <div className=" justify-center flex">
        <h2 className=" font-bold text-4xl p-4">
          {" "}
          {LargeNumbers(addSec)}/sec{" "}
        </h2>
        <h2 className=" font-bold text-4xl p-4">
          {LargeNumbers(perClick)}/Click{" "}
        </h2>
      </div>

      <div className=" text-left flex font-bold text-4xl">
        <div className="w-[31vh] "></div> {LargeNumbers(enthalpy)}
      </div>
      <div className=" text-center justify-center flex font-bold text-4xl ">
        {" "}
        Enthalpy{" "}
      </div>
      <button onClick={clickOn} className="p-4">
        <BoundlessExpanse />
      </button>
    </>
  );
};

export { ClickSpace };
