import { ScrollFrameVars } from "../Types/ConstructiorTypes";

const YScollFrame: React.FC<ScrollFrameVars> = (ThisFrameVars) => {
  return (
    <>    
         <div
        className={`rounded-lg p-1 overflow-x-hidden h-12 text-center items-center mt-2`}
      >
        {ThisFrameVars.title}
      </div>
    
      <div
    className={`border-2 rounded-lg p-1 border-solid ${ThisFrameVars.tailwind} overflow-x-hidden   h-1/2`}
  >

      <div
        className={`border-2 rounded-lg p-1 border-solid ${ThisFrameVars.tailwind} overflow-x-hidden overflow-y-hidden `}
      >
        {ThisFrameVars.children}
      </div> </div>
    </>
  );
};

export { YScollFrame };
