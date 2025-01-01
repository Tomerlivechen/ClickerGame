import { UniverseItems } from "../Constants/Items"
import { ItemCell } from "./ItemCell"

const PurchaceSet = () => {
    return (
        <>
        <div>
            Set
        </div>
        {UniverseItems.map((Item,index)=>
            <div key={index}>
            <ItemCell {...Item}/></div>)}
        </>
    )
}

export {PurchaceSet}