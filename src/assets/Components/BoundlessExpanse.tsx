import { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../ContextAPI/InventoryContext";

const BoundlessExpanse = () => {
  const { addPerSec, totalEnthalpy } = useContext(InventoryContext);
  const [glow, setGlow] = useState(false);
  const [opacity, setOpacity] = useState(`opacity-0`);

  useEffect(() => {
    if (addPerSec > 1n) {
      setGlow(true);
    }
  }, [addPerSec]);

  useEffect(() => {
    const opacitySet =
      Math.round((totalEnthalpy.toString().length - 1) / 10) * 5;
    console.log(totalEnthalpy.toString().length - 1, opacitySet);
    setOpacity(`opacity-${opacitySet}`);
  }, [totalEnthalpy]);

  return (
    <>
      <div
        className={`bg-black w-[50vh] h-[50vh] xl:w-[60vh] xl:h-[60vh] glow-box hover:animate-glowPulse rounded-2xl flex justify-center items-center ${
          glow ? `animate-fastglowPulse` : ``
        }`}
      >
        <img
          className={`object-contain rounded-full ${opacity} `}
          src="https://i.giphy.com/3og0IFrHkIglEOg8Ba.webp"
          alt=""
        />
      </div>
    </>
  );
};

export { BoundlessExpanse };
