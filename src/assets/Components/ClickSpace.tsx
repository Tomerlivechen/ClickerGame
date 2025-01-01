import { useContext } from "react"
import { InventoryContext } from "../ContextAPI/InventoryContext"
import { LargeNumbers } from "../Constants/Methods"

const ClickSpace = () => {
    const {inventory, enthalpy, clickOn} = useContext(InventoryContext) 

    return (<>
    <button onClick={clickOn} className="p-4">click {LargeNumbers(enthalpy)} </button>
    </>)
}

export {ClickSpace}