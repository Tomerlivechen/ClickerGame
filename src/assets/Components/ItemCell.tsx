import { useContext, useEffect, useState } from "react"
import { itemVals } from "../Types/ButtonTypes"
import { InventoryContext } from "../ContextAPI/InventoryContext"
import { LargeNumbers } from "../Constants/Methods"

const ItemCell = (item: itemVals) => {
    const {inventory, enthalpy, addInvItem} = useContext(InventoryContext) 
const [price, setPrice]= useState(item.price)
const [currentAmount, setCurrentAmount]= useState(0n)


const buyItem = () =>{
    if (enthalpy> price && item){
        addInvItem(item)
    }
}

useEffect(() =>{
    if(inventory){
    const existingItemIndex = inventory.ItemList.findIndex(
        (i) => i.name === item.name
      );
      if (existingItemIndex !== -1) {
      const InventoryList = [...inventory.ItemList];
      const InventoryAmount = InventoryList[existingItemIndex] 
      setCurrentAmount(BigInt(InventoryAmount.Amount) || 0n)
   }}
},[inventory])


useEffect(() =>{
    if(item.price && item.PriceIncrease){
    setPrice((item.price*BigInt((item.PriceIncrease+1)*100))/100n)
    }

},[currentAmount])

    return (
        <>
       {enthalpy>= item.visibleValue &&
       

<div className="flex flex-row w-64 p-4 hover:cursor-pointer"
onClick={()=>buyItem()}>

    <img
      src={item.ActiveImage}
      className={`${enthalpy > price ? `` : `grayscale`} h-20 w-20 rounded-lg object-cover`}
      alt={item.name}
    />

    <div className="flex flex-col ml-1 flex-grow items-center justify-center">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <h2 className="text-sm text-gray-500">{LargeNumbers(price)}</h2>
    </div>
    <div className="flex items-center justify-end ">
    <h2 className="text-lg font-bold text-right p-4 ml-6">{LargeNumbers(currentAmount)}</h2></div> </div>
 
}
        </>
    )
}

export {ItemCell}