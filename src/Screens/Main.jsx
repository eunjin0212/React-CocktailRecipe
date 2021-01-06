import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Search from "./Search";
import Modal from "../Components/Modal";
import Portal from "../Components/Portal";

const Main = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    console.log("얼마나 랜더링 되는가?");
    fetchUrl();
  }, []);

  const handleOpen = () => {
    setOpen(true);
    console.log("open Modal");
  };
  const handleClose = () => {
    setOpen(false);
    console.log("close Modal");
  };

  return (
    <Wrapper className="main">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.drinks.map(
            ({ idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb }) => (
              <>
                <Container onClick={handleOpen}>
                  <img src={`${strDrinkThumb}`} alt={`${strDrink}`} />
                  <div key={`${idDrink}`}>{`${strDrink}`}</div>
                </Container>
                {open && (
                  <Portal>
                    <Modal idDrink={`${idDrink}`} onClose={handleClose} />
                  </Portal>
                )}
              </>
            )
          )}
        </>
      )}
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
  img {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
  }
  div {
    color: #7f8c8d;
    font-size: 30px;
  }
`;
