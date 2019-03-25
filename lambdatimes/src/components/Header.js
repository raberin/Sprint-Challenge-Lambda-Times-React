import React from "react";
import { HeaderContainer, HeaderSpan } from "./styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSpan type="date">MARCH 32, 2018</HeaderSpan>
      <h1>Lambda Times</h1>
      <HeaderSpan type="temp">98°</HeaderSpan>
    </HeaderContainer>
  );
};

export default Header;
