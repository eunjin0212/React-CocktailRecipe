import React from "react";
import styled from "styled-components";

const Detail = (props) => {
  const { strDrink, strIngredient1, strIngredient2 } = props;
  const handleClick = () => {};
  return (
    <Container>
      <img alt="" />
      <div> {strDrink}</div>
      <div>{(strIngredient1, strIngredient2)}</div>
    </Container>
  );
};
export default Detail;

const Container = styled.div``;
