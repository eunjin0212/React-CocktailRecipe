import React from "react";
import styled from "styled-components";

const Detail = (props) => {
  const handleClick = () => {};
  const { strDrink, strIngredient1, strIngredient2 } = props;
  return (
    <Container>
      <div>{strDrink}</div>
      <div>{strIngredient1}</div>
      <div>{strIngredient2}</div>
    </Container>
  );
};
export default Detail;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
