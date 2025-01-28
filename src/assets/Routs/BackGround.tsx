import { ReactNode } from "react";

const BackGround: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className=" flex bg-teal-700 h-[220vh] lg:h-[108vh] justify-center ">
        {children}
      </div>
    </>
  );
};

export { BackGround };
