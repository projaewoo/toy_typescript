import React, { useState } from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

import { MENU } from "./utils/MENU";

const App = () => {
  const [page, setPage] = useState(MENU[0]);
  const [sideBar, setSideBar] = useState(true);

  return (
    <>
      <NavBar setPage={setPage} sideBar={sideBar} setSideBar={setSideBar} />
      <MainPage page={page} sideBar={sideBar} />
    </>
  );
};

export default App;
