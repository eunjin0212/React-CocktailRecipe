import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchForm from "../Components/SearchForm";
import Portal from "../Components/Portal";
import Modal from "../Components/Modal";
import "../css/portal.css";
const Search = () => {
  let result = 0;
  const modal = document.getElementById("modal");
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleOpen = (idDrink) => {
    setSelectedItem(idDrink);
    setOpen(true);
    modal.style.display = "flex";
  };

  const handleClose = () => {
    setOpen(false);
    modal.style.display = "none";
  };
  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        setCocktails(data);
      } catch (error) {
        Error("Search Error!");
      }
    };
    getDrinks();
  }, [searchTerm]);

  Object.keys(cocktails).forEach((drinks) => {
    let date = cocktails.drinks[0].dateModified;
    const regex = /[^0-9]/g;
    result = date.replace(regex, "");
  });
  Number(result);

  return (
    <SearchMain key={result}>
      <SearchForm setSearchTerm={setSearchTerm} />
      <Wrapper>
        {cocktails.drinks &&
          cocktails.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
            <Container
              key={`${strDrink}`}
              className="cocktail"
              onClick={() => {
                handleOpen(idDrink);
              }}>
              <Img>
                <img src={`${strDrinkThumb}`} alt={`${strDrink}`} />
              </Img>
              <Name key={`${idDrink}`}>{`${strDrink}`}</Name>
            </Container>
          ))}
      </Wrapper>
      {open && (
        <Portal key={3}>
          <Modal key={result} selectedItem={`${selectedItem}`} onClose={handleClose} />
        </Portal>
      )}
    </SearchMain>
  );
};

export default Search;
const SearchMain = styled.main`
  width: 100%;
  height: auto;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));

  @media only screen and (max-width: 460px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }
  @media only screen and (max-width: 829px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  }
`;
const Container = styled.button`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: none;
  background-color: inherit;
  width: 180px;
  cursor: pointer;
`;
const Img = styled.div`
  background-color: #fff;
  height: 180px;
  border-radius: 10px;
  img {
    width: 180px;
    height: 180px;
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
