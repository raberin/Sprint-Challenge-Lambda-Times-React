import React from "react";
import styled, { css } from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  ${props => (props.type === "date" ? `margin-left: 25px, flex: 1` : null)}
  ${props =>
    props.type === "temp"
      ? `text-align: right, margin-left: 25px, flex: 1`
      : null}
`;
const Header = props => {
  return (
    <HeaderContainer>
      <HeaderSpan type="date">MARCH 32, 2018</HeaderSpan>
      <h1>Lambda Times</h1>
      <HeaderSpan type="temp">98°</HeaderSpan>
    </HeaderContainer>
  );
};

export default Header;
