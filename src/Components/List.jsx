import React from "react";
import Cocktail from "./Cocktail";
import styled from "styled-components";

const List = ({ cocktails }) => {
  return (
    <Wrapper className="cocktail-list">
      {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));

  @media only screen and (max-width: 460px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }
  @media only screen and (max-width: 829px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  }
`;
