import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import SearchForm from "../Components/SearchForm";
import Portal from "../Components/Portal";
import Modal from "../Components/Modal";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleOpen = (idDrink) => {
    setSelectedItem(idDrink);
    setOpen(true);
    console.log("open");
  };

  const handleClose = () => {
    setOpen(false);
    console.log("close");
  };
  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        setCocktails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDrinks();
    console.log("useEffect");
  }, [searchTerm]);

  return (
    <main style={{ width: "100%" }}>
      <SearchForm setSearchTerm={setSearchTerm} />
      <Wrapper className="cocktail-list">
        {/* {cocktails &&
          cocktails.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
            <Container
              className="cocktail"
              onClick={() => {
                handleOpen(idDrink);
              }}
            >
              <Img>
                <img src={`${strDrinkThumb}`} alt={`${strDrink}`} />
              </Img>
              <Name key={`${idDrink}`}>{`${strDrink}`}</Name>
            </Container>
          ))} */}
      </Wrapper>
      {open && (
        <Portal>
          <Modal selectedItem={`${selectedItem}`} onClose={handleClose} />
        </Portal>
      )}
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
const Container = styled.button`
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
