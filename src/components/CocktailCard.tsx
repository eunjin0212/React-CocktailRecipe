import styled, { css } from "styled-components";
import { ICocktailData } from '../types/cocktailData.type';
import React from 'react';

interface ICardProps extends Pick<ICocktailData, 'strDrinkThumb' | 'idDrink' | 'strDrink'> {
  onOpen: (arg: string) => void,
  strDrinkThumb: string;
  style?: object;
}

const CocktailCard = ({ onOpen, strDrinkThumb, strDrink, idDrink, style }: ICardProps) => {
  return (
    <>
      <Container onClick={() => onOpen(idDrink)} style={style}>
        <img className='card-img' src={strDrinkThumb} alt={strDrink} />
        <div className='card-name'>{strDrink}</div>
      </Container>
    </>
  )
};
export default CocktailCard;

const Container = styled.button<{ $style?: object; }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: inherit;
  border-style: none;
  cursor: pointer;
  .card-img {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #fff;
  }
  .card-name {
    color: whitesmoke;
    font-size: 30px;
  }
  ${props =>
    props.$style &&
    css`
      ...props.$style
    `};
`;
