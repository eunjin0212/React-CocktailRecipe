import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import type { ICocktailData } from '../types/cocktailData.type'

interface IModalProps {
  onClose: () => void;
  selectedItem: string;
}

const Modal = ({ onClose, selectedItem }: IModalProps) => {
  const [modaldata, setModalData] = useState<ICocktailData>()
  const [top, setTop] = useState(0)

  const getSelectedItem = async () => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedItem}`
      const response = await axios.get(url)
      setModalData(response.data.drinks[0])

    } catch (error) {
      Error('Modal Data Error')
    }
  }

  const preventScroll = () => {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;
    setTop(currentScrollY)
    console.log(window.scrollY, document.documentElement.scrollTop)
    window.scrollTo(0, currentScrollY);
    return currentScrollY;
  };

  const allowScroll = (prevScrollY: number) => {
    setTop(0)
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, prevScrollY);
  };

  useEffect(() => {
    getSelectedItem();
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, [selectedItem])

  return (
    <MyModalComponent onClick={onClose} key={selectedItem} style={{ top }}>
      {
        modaldata && (
          <Container>
            <Image>
              <img src={modaldata.strDrinkThumb} alt={modaldata.idDrink} />
            </Image>
            <About>
              <Name>{modaldata.strDrink}</Name>
              <Alcoholic>
                <span>알콜</span>
                <span>{modaldata.strAlcoholic}</span>
              </Alcoholic>
              <Glass>
                <span>잔</span>
                <span>{modaldata.strGlass}</span>
              </Glass>
              <Category>
                <span>카테고리</span>
                <span>{modaldata.strCategory}</span>
              </Category>
              <Instruction>
                <span>방법</span>
                <span>{modaldata.strInstructions}</span>
              </Instruction>
              <Ingredient>
                <span>재료</span>
                <div>
                  <span>{modaldata.strIngredient1}</span>
                  <span>{modaldata.strIngredient2}</span>
                  <span>{modaldata.strIngredient3}</span>
                  <span>{modaldata.strIngredient4}</span>
                  <span>{modaldata.strIngredient5}</span>
                </div>
              </Ingredient>
            </About>
          </Container>
        )
      }
    </MyModalComponent>
  )
}
export default Modal;

const MyModalComponent = styled.div`
  background-color: whitesmoke;
  border-radius: 8px;
  width: 80%;
  position: absolute;
  box-sizing: border-box;
  z-index: 1050;
  overflow-y: scroll;
`;
const Container = styled.div`
  color: black;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 100;
  margin: 0 auto;
  @media screen and (max-width: 460px) {
    width: 80%;
    top: 100px;
  }
  @media screen and (max-width: 830px) {
    flex-direction: column;
    justify-content: center;
  }
  `;
const About = styled.div`
  flex-direction: column;
  padding: 0 20px;
  > div {
    display: flex;
    margin-bottom: 20px;
  }
  span {
    display: inline-flex;
    word-break: break-all;
    &:first-of-type {
      width: 30%;
    }
    &:last-of-type {
      width: 70%;
    }
  }
`;
const Image = styled.div`
  img {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    border: 1px solid grey;
    box-shadow: 10px 10px 10px 1px rgba(244, 244, 244, 0.7);
    margin: 30px 20px;
  }
  @media screen and (max-width: 830px) {
    margin: 20px 0px;
    display: flex;
    justify-content: center;
    img {
      margin: 0;
      width: 200px;
      height: 200px;
    }
  }
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 30px;
`;
const Alcoholic = styled.div``;
const Glass = styled.div``;
const Category = styled.div``;
const Instruction = styled.div`
  div {
    width: 70%;
  }
`;
const Ingredient = styled.div`
  > span {
    width: 30% !important;
  }
  > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    gap: 5px;
    > span {
      display: block;
    }
  }
`;
