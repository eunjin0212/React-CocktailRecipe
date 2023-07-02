import styled from "styled-components";
import { ICocktailData } from '../types/cocktailData.type';
import React from 'react';

interface ICardProps extends Pick<ICocktailData, 'strDrinkThumb' | 'idDrink' | 'strDrink'> {
  onOpen: (arg: string) => void,
  strDrinkThumb: string;
}

const CocktailCard = ({ onOpen, strDrinkThumb, strDrink, idDrink }: ICardProps) => {
  return (
    <Container onClick={() => onOpen(idDrink)}>
      <img src={strDrinkThumb} alt={strDrink} />
      <div>{strDrink}</div>
    </Container>
  )
};
export default CocktailCard;

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
