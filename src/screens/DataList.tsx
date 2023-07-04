import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import Portal from "../components/Portal";
import Modal from "../components/Modal";
import type { ICocktailData } from '../types/cocktailData.type';
import "../css/portal.scss";
import axios from 'axios';
import { allowScroll, preventScroll } from '../utils/modal';
import CocktailCard from '../components/CocktailCard';

const cardStyle = {
  margin: '10px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderStyle: 'none',
  backgroundColor: 'inherit',
  width: '180px',
  cursor: 'pointer',
  '.card-img': {
    width: '180px',
    height: '180px',
    opacity: 0.7,
    borderRadius: '10px',
    '&:hover': {
      opacity: 1,
    },
  },
  '.card-name': {
    color: 'white',
    margin: '10px 0px',
    fontSize: '20px',
    textAlign: 'center',
  },
};

const DataList = () => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState<ICocktailData[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [top, setTop] = useState(0)
  const modal = document.getElementById("modal");
  
  const handleOpen = (idDrink:string) => {
    setSelectedItem(idDrink);
    setTop(window.scrollY)
    setOpen(true);
    modal!.classList.add('open');
    preventScroll();
  };
  
  const handleClose = () => {
    setOpen(false);
    allowScroll(top);
    modal!.classList.remove('open');
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
            <CocktailCard
              key={idDrink}
              onOpen={() => handleOpen(idDrink)}
              idDrink={idDrink}
              strDrink={strDrink}
              strDrinkThumb={strDrinkThumb}
              style={cardStyle}
            />
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
