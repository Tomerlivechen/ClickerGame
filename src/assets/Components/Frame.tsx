
import { FrameVars } from "../Types/ConstructiorTypes";

const Frame: React.FC< FrameVars > = (ThisFrameVars) => {

return(
    <>
    <div className="border-3 rounded-lg p-4 border-solid">
        {ThisFrameVars.children}
    </div>
    </>
)

}

export { Frame}