import React from "react";
import styled from "styled-components";
import useFetch from "../Components/useFetch";

const Detail = (props) => {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const [data, loading] = useFetch(url);

  return (
    <Container>
      <img />
    </Container>
  );
};
export default Detail;

const Container = styled.div``;
