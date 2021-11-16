import React, { useState } from "react";
import styled from "styled-components";

import { MENU } from "../utils/MENU";
import CounterContainer from "src/containers/CounterContainer";
import TodosContainer from "src/containers/TodosContainer";

interface MainPageProps {
  page: any;
  sideBar: any;
}

const MainPage = ({ page, sideBar }: MainPageProps) => {
  const returnPage = () => {
    switch (page) {
      case MENU[0]:
        return <CounterContainer />;
      case MENU[1]:
        return <TodosContainer />;
      default:
        return <p>mainPage</p>;
    }
  };

  return <MainPageWrapper sideBar={sideBar}>{returnPage()}</MainPageWrapper>;
};

type MainPageWrapperProps = {
  sideBar: any;
};

const MainPageWrapper = styled.div<MainPageWrapperProps>`
  padding-left: ${(props) => (props.sideBar ? "190px" : "60px")};
`;

export default MainPage;
