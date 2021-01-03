import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  }, [id]);
  return (
    <Wrapper>
      <MainLink to="/">Main</MainLink>
      {data.map((result) => {
        return (
          <Container>
            <Image>
              <img src={result.strDrinkThumb} alt={result.idDrink} />
            </Image>
            <About>
              <Name>{result.strDrink}</Name>
              <Alcoholic>
                <span>알콜</span>
                <div>{result.strAlcoholic}</div>
              </Alcoholic>
              <Glass>
                <span>잔</span>
                <div>{result.strGlass}</div>
              </Glass>
              <Category>
                <span>카테고리</span>
                <div>{result.strCategory}</div>
              </Category>
              <Instruction>
                <span>방법</span>
                <div>{result.strInstructions}</div>
              </Instruction>
              <Ingredient>
                <span>재료</span>
                <div className="ing">
                  <div>{result.strIngredient1}</div>
                  <div>{result.strIngredient2}</div>
                  <div>{result.strIngredient3}</div>
                  <div>{result.strIngredient4}</div>
                  <div>{result.strIngredient5}</div>
                </div>
              </Ingredient>
            </About>
          </Container>
        );
      })}
    </Wrapper>
  );
};

export default Detail;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const MainLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
`;
const Container = styled.div`
  margin: 20px 0px;
  width: 70%;
  background-color: black;
  box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  div {
    display: flex;
    margin-bottom: 20px;
  }
`;
const About = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  span {
    width: 90px;
  }
`;
const Image = styled.div`
  margin: 30px 20px;
  img {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid whitesmoke;
    box-shadow: 10px 10px 10px 1px rgba(244, 244, 244, 0.3);
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
  .ing {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
`;
