import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchForm from "../Components/SearchForm";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        setCocktails(drinks);
      } catch (error) {
        console.log(error);
      }
    };
    console.log("얼마나 랜더링 되는가?");
    getDrinks();
  }, [searchTerm]);

  return (
    <main style={{ width: "100%" }}>
      <SearchForm setSearchTerm={setSearchTerm} />
      <Wrapper className="cocktail-list">
        {cocktails.map((result) => {
          return (
            <Container className="cocktail">
              <Img>
                <img src={result.strDrinkThumb} alt={result.strDrink} />
              </Img>
              <Name key={result.idDrink}>{result.strDrink}</Name>
            </Container>
          );
        })}
      </Wrapper>
    </main>
  );
};

export default Search;

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
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
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
