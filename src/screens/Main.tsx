import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import Search from "./Search";
import Modal from "../components/Modal";
import Portal from "../components/Portal";
import Header from "../components/Header";
import ICocktailData from "../types/cocktailData.type";
import "../css/portal.scss";

const Main = () => {
  const [cocktailList, setCocktailList] = useState<ICocktailData>({drinks: []});
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  useEffect(() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setCocktailList(jsonData);
      } catch (error) {
        Error("Main Data Error");
      }
    };
    fetchUrl();
  }, []);

  const modal = document.getElementById("modal");

  const handleOpen = (idDrink:string) => {
    setSelectedItem(idDrink);
    setOpen(true);
    modal!.style.height = "1000vh";
    modal!.style.display = "flex";
  };

  const handleClose = () => {
    setOpen(false);
    modal!.style.display = "none";
  };

  return (
    <Fragment>
      <Header />
      { 
        cocktailList.drinks.map(({ idDrink, strDrink, strDrinkThumb }, idx) => (
          <Wrapper key={idx}>
            <Container
              key={idDrink}
              onClick={() => {
                handleOpen(idDrink);
              }}>
              <img src={`${strDrinkThumb}`} alt={`${strDrink}`} />
              <div>{`${strDrink}`}</div>
            </Container>
            {open && (
              <Portal key={selectedItem}>
                <Modal key={idx} selectedItem={selectedItem!} onClose={handleClose} />
              </Portal>
            )}
            <Search />
          </Wrapper>
        ))
      }
    </Fragment>
  );
};
export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  width: inherit;
`;

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: inherit;
  border-style: none;
  cursor: pointer;
  img {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  div {
    color: whitesmoke;
    font-size: 30px;
  }
`;
