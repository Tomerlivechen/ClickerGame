import { FrameVars } from "../Types/ConstructiorTypes";

const Frame: React.FC<FrameVars> = (ThisFrameVars) => {
  return (
    <>
      <div
        className={`border-2 rounded-lg p-1 border-solid ${ThisFrameVars.tailwind} `}
      >
        {ThisFrameVars.children}
      </div>
    </>
  );
};

export { Frame };
