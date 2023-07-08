import styled, { CSSProp } from "styled-components";
import { ICocktailData } from '../types/cocktailData.type';
import React from 'react';

interface ICardProps extends Pick<ICocktailData, 'strDrinkThumb' | 'idDrink' | 'strDrink'> {
  onOpen: (arg: string) => void,
  strDrinkThumb: string;
  style?: CSSProp;
  imgWidth: number;
  imgHeight: number;
}

const CocktailCard = ({ onOpen, strDrinkThumb, strDrink, idDrink, style, imgHeight, imgWidth }: ICardProps) => {
  return (
    <>
      <Container onClick={() => onOpen(idDrink)} $customStyle={style}>
        <img 
          className='card-img' 
          src={strDrinkThumb}
          alt={strDrink}
          width={imgWidth}
          height={imgHeight}
        />
        <div className='card-name'>{strDrink}</div>
      </Container>
    </>
  )
};
export default CocktailCard;

const Container = styled.button<{ $customStyle?: CSSProp; }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border-style: none;
  cursor: pointer;
  .card-img {
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #fff;
  }
  .card-name {
    color: whitesmoke;
    font-size: 30px;
  }
  ${({ $customStyle }) => ($customStyle && $customStyle)}; 
`;
