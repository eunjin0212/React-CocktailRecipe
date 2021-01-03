import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name }) => {
  return (
    <Wrapper>
      <Link to={`/${id}`}>
        <Img>
          <img src={image} alt={name} />
        </Img>
        <Contents>
          <Name>{"이름 : " + name}</Name>
        </Contents>
      </Link>
    </Wrapper>
  );
};

export default Cocktail;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 10px 0px;
`;
const Img = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
const Contents = styled.div`
  color: white;
  font-size: 13px;
  div {
    margin: 10px 0px;
  }
`;
const Name = styled.div``;
