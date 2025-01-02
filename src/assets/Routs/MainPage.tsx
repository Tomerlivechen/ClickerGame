
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

<div className="flex flex-1 h-5/6">

    <MainComponent />
  </div>

  );
};

export { MainPage };
