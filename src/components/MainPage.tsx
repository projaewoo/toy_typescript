import React, { useState } from "react";
import styled from "styled-components";

import { MENU } from "../utils/MENU";
import Counter from "./Counter/index";
import Todo from "./Todo/index";

interface MainPageProps {
  page: any;
  sideBar: any;
}

const MainPage = ({ page, sideBar }: MainPageProps) => {
  const [number, setNumber] = useState(1);

  const returnPage = () => {
    switch (page) {
      case MENU[0]:
        return (
          <Counter
            number={number}
            onIncrease={() => setNumber(number + 1)}
            onDecrease={() => setNumber(number - 1)}
          />
        );
      case MENU[1]:
        return (
          <Todo
            input={1}
            todos={{ test: 1 }}
            onChangeInput={1}
            onInsert={1}
            onToggle={1}
            onRemove={1}
          />
        );
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
