import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import DataList from "./DataList";
import Modal from "../components/Modal";
import Portal from "../components/Portal";
import Header from "../components/Header";
import CocktailCard from '../components/CocktailCard';
import axios from 'axios';
import type { ICocktailData } from "../types/cocktailData.type";

const cardStyle = css`
  width: 300px;
`;

const Main = () => {
  const [cocktailList, setCocktailList] = useState<ICocktailData[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const getRandomDrinks = async () => {
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      setCocktailList(response.data.drinks);
    } catch (error) {
      Error("Random Data Error");
    }
  }

  useEffect(() => {
    getRandomDrinks()
  }, []);

  const modal = document.getElementById("modal");
  const randomDataModalOpen = (idDrink: string) => {
    setSelectedItem(idDrink);
    modal!.classList.add('open');
    setOpen(true);
  };

  const randomDataModalClose = () => {
    setOpen(false);
    modal!.classList.remove('open');
  };

  return (
    <MainWrapper>
      <Header />
      {
        cocktailList.map(({ idDrink, strDrink, strDrinkThumb }, idx) => (
          <CocktailCard
            key={idx}
            onOpen={randomDataModalOpen}
            idDrink={idDrink}
            strDrink={strDrink}
            strDrinkThumb={strDrinkThumb}
            style={cardStyle}
          />
        ))
      }
      {open && (
        <Portal key={selectedItem}>
          <Modal
            selectedItem={selectedItem!}
            onClose={randomDataModalClose}
          />
        </Portal>
      )}
      <DataList />
    </MainWrapper>
  );
};
export default Main;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  width: inherit;
`
