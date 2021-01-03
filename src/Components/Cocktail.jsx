import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name }) => {
  return (
    <Wrapper>
      <CocktailLink to={`/${id}`}>
        <Img>
          <img src={image} alt={name} />
        </Img>
        <Contents>
          <Name>{name}</Name>
        </Contents>
      </CocktailLink>
    </Wrapper>
  );
};

export default Cocktail;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0px;
`;
const CocktailLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.div`
  img {
    width: 100px;
    height: 100px;
    box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;
const Contents = styled.div`
  color: white;
  font-size: 13px;
  div {
    margin: 10px 0px 0px 30px;
  }
`;
const Name = styled.div`
  font-size: 20px;
`;
