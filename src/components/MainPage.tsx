import React from "react";
import styled from "styled-components";

interface MainPageProps {
  page: any;
  sideBar: any;
}

const MainPage = ({ page, sideBar }: MainPageProps) => {
  return <MainPageWrapper sideBar={sideBar}>{page.component}</MainPageWrapper>;
};

type MainPageWrapperProps = {
  sideBar: any;
};

const MainPageWrapper = styled.div<MainPageWrapperProps>`
  padding-left: ${(props) => (props.sideBar ? "190px" : "60px")};
`;

export default MainPage;
