import {  InventoryProvider } from "../ContextAPI/InventoryContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BackGround } from "./BackGround";
import { MainPage } from "./MainPage";

function RouterControler() {
    return (
      <>
        <InventoryProvider>
          <Router>
            <BackGround>
              <Routes>
                <Route path="/" element={<MainPage />} />
              </Routes>
            </BackGround>
          </Router>
        </InventoryProvider>
      </>
    );
  }
  
  export { RouterControler };