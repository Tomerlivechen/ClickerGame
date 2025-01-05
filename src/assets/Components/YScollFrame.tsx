import { ScrollFrameVars } from "../Types/ConstructiorTypes";

const YScollFrame: React.FC<ScrollFrameVars> = (ThisFrameVars) => {
  return (
    <>
      <div
        className={`rounded-lg p-1 overflow-x-hidden lg:h-12 h-fit text-center items-center mt-2 font-bold text-xl`}
      >
        {ThisFrameVars.title}
      </div>

      <div
        className={`border-2 rounded-lg p-1 border-solid ${ThisFrameVars.tailwind} overflow-x-hidden  `}
      >
        <div
          className={`border-2 rounded-lg p-1 border-solid ${ThisFrameVars.tailwind} overflow-x-hidden overflow-y-scroll `}
        >
          {ThisFrameVars.children}
        </div>{" "}
      </div>
    </>
  );
};

export { YScollFrame };
