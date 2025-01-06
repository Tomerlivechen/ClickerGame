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
  <div className="text-center">
    <h1 className="text-3xl font-bold">Univers Clicker - Click to fill the Universe</h1>
  </div>
  <div className="flex flex-1 h-full gl:overflow-y-hidden justify-center">
    <MainComponent />
  </div>
</div>
  );
};

export { MainPage };
