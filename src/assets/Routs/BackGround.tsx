import { ReactNode } from "react";

const BackGround: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="bg-teal-700">{children}</div>
    </>
  );
};

export { BackGround };
