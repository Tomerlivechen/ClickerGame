import { createContext, ReactNode, useEffect, useState } from "react";
import { StoredInventory } from "../Types/ButtonTypes";
import { DecodeStorage, EncodeStorage } from "../Constants/Methods";

const initialValues = {
    InventoryString: localStorage.getItem("ClickerInventory")?.toString()?? null ,
    Enthalpy : localStorage.getItem("ClickerEnthalpy")?.toString()?? null
  };
  
const  BaseInventoryString : StoredInventory = {
  ItemList: [],
  SpecialList: [],
  FingerList: [{
    Id: "",
    name: "Finger1",
    price: 0n,
    PayOff: 1,
    ActiveImage: "",
    HiddenImage: ""
  }],
  DimensionList: [],
  HasStar: false
} 


const defaultValues = {
  DefaultInventory: BaseInventoryString,
  DefaultEnthalpy : 0n
};


  const InventoryContext = createContext<{
    inventory: StoredInventory | undefined;
    enthalpy: bigint;
    clickOn: () => void;
  }>({
    inventory: undefined,
    enthalpy: 0n,
    clickOn: () => {},
  });
  
  const InventoryProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const [inventory, setInventory] = useState<StoredInventory>(defaultValues.DefaultInventory);
    const [enthalpy, setEnthalpy] = useState<bigint>(defaultValues.DefaultEnthalpy);

    useEffect(() =>{
      if (initialValues.Enthalpy){
        setEnthalpy(BigInt(initialValues.Enthalpy))
      }
else {
  setEnthalpy(defaultValues.DefaultEnthalpy)
}
      if(initialValues.InventoryString) {
        setInventory(DecodeStorage(initialValues.InventoryString))
      }
      else {
        setInventory(defaultValues.DefaultInventory)
      }
    },[])

    useEffect(() =>{
      localStorage.setItem("ClickerEnthalpy",enthalpy.toString())
    },[enthalpy])
    useEffect(() =>{
      if (inventory){
      localStorage.setItem("ClickerInventory",EncodeStorage(inventory))
      }
    },[inventory])
  
    const clickOn = () => {
      let fingerValue : bigint = 1n;
      inventory?.FingerList.forEach(FingerList => {fingerValue = fingerValue * BigInt(FingerList.PayOff)} );
      setEnthalpy((prev)=>prev + fingerValue);
    }

const AddEnthalpy = () =>{
let AddEnthalpy : bigint = 0n;
let MultiplyEnthalpy : bigint = 1n;
if(inventory?.HasStar){
inventory?.ItemList.forEach(ItemList => {AddEnthalpy = AddEnthalpy + BigInt(ItemList.Amount) * BigInt(ItemList.PayOff) * BigInt(ItemList.StarEffect ?? 1) } );
}
else {
  if(inventory?.HasStar){
    inventory?.ItemList.forEach(ItemList => {AddEnthalpy = AddEnthalpy + BigInt(ItemList.Amount) * BigInt(ItemList.PayOff)} );
    }
}
if (inventory?.DimensionList && inventory.DimensionList.length>0){
  inventory?.DimensionList.forEach(DimensionList => {MultiplyEnthalpy = MultiplyEnthalpy * BigInt(DimensionList.PayOff) } );
}
if (inventory?.SpecialList && inventory.SpecialList.length>0){
  inventory?.SpecialList.forEach(SpecialList => {MultiplyEnthalpy = MultiplyEnthalpy * BigInt(SpecialList.PayOff) } );
}
setEnthalpy((prev)=>prev + AddEnthalpy*MultiplyEnthalpy);
}


    useEffect(() => {
      const intervalId = setInterval(() => {
        AddEnthalpy();
      }, 1000); 
      return () => {
        clearInterval(intervalId);
      };
    }, []);

  
    return (
      <InventoryContext.Provider value={{ inventory, enthalpy, clickOn }}>
        {children}
      </InventoryContext.Provider>
    );
  };
  
  export { InventoryContext, InventoryProvider };