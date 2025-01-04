import { ReactNode } from "react";

const BackGround: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className=" flex bg-teal-700 h-[170vh] md:h-[100vh] justify-center ">
        {children}
      </div>
    </>
  );
};

export { BackGround };
