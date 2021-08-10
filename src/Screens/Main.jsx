import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Search from "./Search";
import Modal from "../Components/Modal";
import Portal from "../Components/Portal";
import "../css/portal.css";

const Main = () => {
  const [datas, setDatas] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  let result = 0;

  useEffect(() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setDatas(jsonData);
      } catch (error) {
        Error("Main Data Error");
      }
    };
    fetchUrl();
  }, []);

  Object.keys(datas).forEach((drinks) => {
    let date = datas.drinks[0].dateModified;
    const regexs = /[^0-9]/g;
    result = date.replace(regexs, "");
  });
  Number(result);

  const modal = document.getElementById("modal");

  const handleOpen = (idDrink) => {
    setSelectedItem(idDrink);
    setOpen(true);
    modal.style.height = "1000vh";
    modal.style.display = "flex";
  };

  const handleClose = () => {
    setOpen(false);
    modal.style.display = "none";
  };

  return (
    <>
      {datas.drinks &&
        datas.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <Wrapper key={result}>
            <Container
              key={1}
              onClick={() => {
                handleOpen(idDrink);
              }}>
              <img src={`${strDrinkThumb}`} alt={`${strDrink}`} />
              <div>{`${strDrink}`}</div>
            </Container>
            {open && (
              <Portal key={2}>
                <Modal key={result} selectedItem={`${selectedItem}`} onClose={handleClose} />
              </Portal>
            )}
            <Search />
          </Wrapper>
        ))}
    </>
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
    //box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
  }
  div {
    color: whitesmoke;
    font-size: 30px;
  }
`;
