import React, { Component, ReactElement, useState } from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

import { MENU } from "./utils/MENU";

type pageType = {
  name: string;
  component: ReactElement<Component>;
};

const App = () => {
  const [page, setPage] = useState<pageType>({
    name: MENU[0].name,
    component: MENU[0].component,
  });
  const [sideBar, setSideBar] = useState(true);

  return (
    <>
      <NavBar setPage={setPage} sideBar={sideBar} setSideBar={setSideBar} />
      <MainPage page={page} sideBar={sideBar} />
    </>
  );
};

export default App;
