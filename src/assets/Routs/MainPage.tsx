import { MainComponent } from "../Components/MainComponent";

const MainPage = () => {
  /*
   useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); */

  return (
    <div className="h-screen">
      <div className="flex flex-1 h-full gl:overflow-y-hidden justify-center">
        <MainComponent />
      </div>
    </div>
  );
};

export { MainPage };
