import { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { LargeNumbers } from "../Constants/Methods";

const ClickSpace = () => {
  const {perClick, addPerSec, inventory, enthalpy, clickOn } = useContext(
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
      <button onClick={clickOn} className="p-4">
        click {LargeNumbers(enthalpy)}{" "}
      </button>
      <h2 className=""> {LargeNumbers(addSec)}/sec </h2>
      <h2 className=""> {LargeNumbers(perClick)}/Click </h2>
    </>
  );
};

export { ClickSpace };
