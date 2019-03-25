import React from "react";
import {
  TopBarDiv,
  TopBarDivContainer,
  TopBarDivContainerCenter,
  TopBarDivContainerLeft,
  TopBarDivContainerRight
} from "./styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarDivContainer>
        <TopBarDivContainerLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </TopBarDivContainerLeft>
        <TopBarDivContainerCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </TopBarDivContainerCenter>
        <TopBarDivContainerRight>
          <span>LOG IN</span>
        </TopBarDivContainerRight>
      </TopBarDivContainer>
    </TopBarDiv>
  );
};

export default TopBar;
