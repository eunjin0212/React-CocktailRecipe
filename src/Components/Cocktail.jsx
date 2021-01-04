import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name }) => {
  return (
    <Wrapper className="cocktail">
      <CocktailLink to={`/${id}`}>
        <Container>
          <Img>
            <img src={image} alt={name} />
          </Img>
          <Name>{name}</Name>
        </Container>
      </CocktailLink>
    </Wrapper>
  );
};

export default Cocktail;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const CocktailLink = styled(Link)``;
const Img = styled.div`
  background-color: #fff;
  border-radius: 10px;
  img {
    width: 180px;
    height: 180px;
    box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
    opacity: 0.7;
    border-radius: 10px;
  }
  img:hover {
    opacity: 1;
  }
`;
const Name = styled.div`
  color: white;
  font-size: 13px;
  margin: 10px 0px;
  font-size: 20px;
  text-align: center;
`;
