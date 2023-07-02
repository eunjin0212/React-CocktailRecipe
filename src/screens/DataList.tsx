import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import Portal from "../components/Portal";
import Modal from "../components/Modal";
import type { ICocktailData } from '../types/cocktailData.type';
import "../css/portal.scss";
import axios from 'axios';

const DataList = () => {
  const modal = document.getElementById("modal");
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState<ICocktailData[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [top, setTop] = useState<number>(0);

  const handleOpen = (idDrink:string) => {
    const screenScroll = window.scrollY || document.documentElement.scrollTop;
    setSelectedItem(idDrink);
    setTop(screenScroll);
    modal!.className = "open";
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    modal!.className = "close";
  };

  const getDrinks = async () => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      setCocktails(response.data.drinks);
    } catch (error) {
      Error("Search Error!");
    }
  };
  useEffect(() => {
    getDrinks();
  }, [searchTerm]);

  return (
    <SearchMain>
      <SearchForm setSearchTerm={setSearchTerm} />
      <Wrapper>
        { 
          cocktails.map(({ idDrink, strDrink, strDrinkThumb }) => (
            <Container
              key={idDrink}
              className="cocktail"
              onClick={() => {
                handleOpen(idDrink);
              }}>
              <Img>
                <img src={strDrinkThumb} alt={strDrink} />
              </Img>
              <Name key={idDrink}>{strDrink}</Name>
            </Container>
          ))
        }
      </Wrapper>
      {open && (
        <Portal>
          <Modal
            selectedItem={selectedItem}
            onClose={handleClose}
          />
        </Portal>
      )}
    </SearchMain>
  );
};

export default DataList;

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
