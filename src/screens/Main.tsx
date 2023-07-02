import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataList from "./DataList";
import Modal from "../components/Modal";
import Portal from "../components/Portal";
import Header from "../components/Header";
import CocktailCard from '../components/CocktailCard';
import type { ICocktailData } from "../types/cocktailData.type";
import "../css/portal.scss";
import axios from 'axios';

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
    modal!.className = "open";
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    modal!.className = "close";
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
          />
        ))
      }
      {open && (
        <Portal key={selectedItem}>
          <Modal
            selectedItem={selectedItem!}
            onClose={handleClose}
          />
        </Portal>
      )}
      <DataList />
    </MainWrapper>
  );
};
export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  width: inherit;
`
