import React from "react";
import styled from "styled-components";
import useFetch from "./useFetch";
import "./font.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const Main = () => {
  const [data, loading] = useFetch(url);
  console.log([data.drinks]);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <Wrapper>
          <Header>My Cocktail Recipe</Header>
          {data.drinks.map(
            ({ idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb }) => (
              <Container>
                <img src={`${strDrinkThumb}`} alt="" />
                <div key={`${idDrink}`}>{`${strDrink}`}</div>
              </Container>
            )
          )}
        </Wrapper>
      )}
    </>
  );
};
export default Main;
const Wrapper = styled.div``;
const Header = styled.div`
  text-align: center;
  color: white;
  font-size: 80px;
  margin: 50px 0px 80px 0px;
  font-weight: 900;
  text-shadow: #76ff03 1px 1px 20px;
  font-family: "Yellowtail", cursive;
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
