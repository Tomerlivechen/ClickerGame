import { useContext, useEffect, useState } from "react";
import { itemVals } from "../Types/ButtonTypes";
import { InventoryContext } from "../ContextAPI/InventoryContext";
import { LargeNumbers } from "../Constants/Methods";
import { Frame } from "./Frame";
import { Tooltip } from "react-bootstrap";
import { showToast } from "../Constants/Alerts";
import { AchievementsList } from "../Constants/Achievement";
//import { AchievementsList } from "../Constants/Achievement";

const ItemCell = (item: itemVals) => {
  const {
    totalEnthalpy,
    inventory,
    enthalpy,
    addInvItem,
    addAchievement,
  } = useContext(InventoryContext);
  const [price, setPrice] = useState(item.price);
  const [currentAmount, setCurrentAmount] = useState(0n);
  const [requiermentsMet, setRequiermentsMet] = useState(false);

  const buyItem = () => {
    if (enthalpy > price && item && requiermentsMet) {
      addInvItem(item, price);
    }
    if (item && !requiermentsMet) {
      showToast(`You Require ${item.RequiredSpecial?.name} `, "info");
    }
  };

  useEffect(() => {
    if (currentAmount == 10n || currentAmount == 50n || currentAmount == 100n) {
      showToast(
        `Congratulations, you have created ${currentAmount} ${item.name} `,
        "success"
      );

      const achievementExist = inventory?.Achievements.find(
        (Achievement) =>
          Achievement.itemName === item.name &&
          Achievement.amount === Number(currentAmount)
      );
      if (!achievementExist) {
        const SetAchievement = AchievementsList.find(
          (Achievement) =>
            Achievement.itemName === item.name &&
            Achievement.amount === Number(currentAmount)
        );
        if (SetAchievement) {
          addAchievement(SetAchievement);
        }
      }
    }
  }, [currentAmount]);

  useEffect(() => {
    if (item.RequiredSpecial) {
      if (inventory) {
        const existingItemIndex = inventory.SpecialList.findIndex(
          (i) => i.name === item.RequiredSpecial?.name
        );
        if (existingItemIndex !== -1) {
          setRequiermentsMet(true);
        }
      }
    } else {
      setRequiermentsMet(true);
    }
  }, [inventory]);

  useEffect(() => {
    if (inventory) {
      const existingItemIndex = inventory.ItemList.findIndex(
        (i) => i.name === item.name
      );
      if (existingItemIndex !== -1) {
        const InventoryList = [...inventory.ItemList];
        const InventoryAmount = InventoryList[existingItemIndex];
        setCurrentAmount(BigInt(InventoryAmount.Amount) || 0n);
      }
    }
  }, [inventory]);

  useEffect(() => {
    if (item.price && item.PriceIncrease) {
      setPrice(
        BigInt(
          Math.floor(
            Number(item.price) *
              Math.pow(item.PriceIncrease + 1, Number(currentAmount))
          )
        )
      );
    }
  }, [currentAmount]);

  return (
    <>
      {totalEnthalpy >= item.visibleValue && (
        <Tooltip
          title={
            !requiermentsMet ? `Requires ${item.RequiredSpecial?.name}` : ``
          }
        >
          <Frame tailwind="border-teal-700 w-24 md:w-52 xl:w-64 bg-teal-500 hover:bg-teal-300">
            <div
              className="flex flex-col lg:flex-row p-1 hover:cursor-pointer"
              onClick={() => buyItem()}
            >
              <img
                src={item.ActiveImage}
                className={`${
                  enthalpy > price && requiermentsMet ? `` : `grayscale`
                } h-20 w-20 rounded-lg object-cover`}
                alt={item.name}
              />
              <div className="flex flex-col ml-1 flex-grow items-center justify-center">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <h2 className="text-md font-semibold text-violet-700">
                  {LargeNumbers(price)}
                </h2>
              </div>
              <div className="flex justify-center items-center lg:justify-end ">
                <h2 className="text-lg font-bold text-right gl:p-4 lg:ml-6 p-1">
                  {LargeNumbers(currentAmount)}
                </h2>
              </div>{" "}
            </div>
          </Frame>
        </Tooltip>
      )}
    </>
  );
};

export { ItemCell };
