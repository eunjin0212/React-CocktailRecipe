import React from "react";
import styled from "styled-components";
import useFetch from "../Components/useFetch";
import Search from "../Screens/Search";
import "../Components/font.css";

const Main = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const [data, loading] = useFetch(url);
  return (
    <Wrapper>
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.drinks.map(
            ({ idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb }) => (
              <Container>
                <img src={`${strDrinkThumb}`} alt="" />
                <div key={`${idDrink}`}>{`${strDrink}`}</div>
              </Container>
            )
          )}
        </>
      )}
      <Search />
    </Wrapper>
  );
};
export default Main;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
  }
  div {
    color: #7f8c8d;
    font-size: 30px;
  }
`;
