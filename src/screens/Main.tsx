import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataList from "./DataList";
import Modal from "../components/Modal";
import Portal from "../components/Portal";
import Header from "../components/Header";
import CocktailCard from '../components/CocktailCard';
import axios from 'axios';
import { imgCache } from '../utils/imgCache'
import type { ICocktailData } from "../types/cocktailData.type";

const InitCocktail = {
  idDrink: '',
  strDrink: '',
  strDrinkThumb: '',
}
const Main = () => {
  const [randomCocktail, setRandomCocktail] = useState<Pick<ICocktailData, 'idDrink' | 'strDrink' | 'strDrinkThumb'>>(InitCocktail);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const getRandomDrinks = async () => {
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      setRandomCocktail(imgCache(response.data.drinks)[0]);
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
        <CocktailCard
          onOpen={randomDataModalOpen}
          idDrink={randomCocktail.idDrink}
          strDrink={randomCocktail.strDrink}
          strDrinkThumb={randomCocktail.strDrinkThumb}
          imgHeight={300}
          imgWidth={300}
        />
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
