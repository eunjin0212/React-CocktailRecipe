import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Search from "./Search";
import Modal from "../Components/Modal";
import Portal from "../Components/Portal";

const Main = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const fetchUrl = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("useEffect");
    fetchUrl();
  }, []);
  console.log(data.drinks);
  const handleOpen = (idDrink) => {
    setSelectedItem(idDrink);
    setOpen(true);
    console.log("open");
  };
  const handleClose = () => {
    setOpen(false);
    console.log("close");
  };

  return (
    <Wrapper className="main">
      {data.drinks &&
        data.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <>
            <Container
              onClick={() => {
                handleOpen(idDrink);
                console.log(handleOpen(idDrink));
              }}
            >
              <img src={`${strDrinkThumb}`} alt={`${strDrink}`} />
              <div key={`${idDrink}`}>{`${strDrink}`}</div>
            </Container>
            {open && (
              <Portal>
                <Modal selectedItem={`${selectedItem}`} onClose={handleClose} />
              </Portal>
            )}
          </>
        ))}
      <Search />
    </Wrapper>
  );
};
export default Main;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: inherit;
  border-style: none;
  img {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
    //box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
  }
  div {
    color: #7f8c8d;
    font-size: 30px;
  }
`;
