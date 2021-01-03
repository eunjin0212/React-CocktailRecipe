import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import Detail from "./Detail";

const Searchs = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
    axios
      .get(url)
      .then((res) => {
        setResults(res.data.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [term]);
  useEffect(() => {
    setSearch(
      results.filter((result) => {
        return (
          result.strDrink.toLowerCase().includes(term.toLowerCase()),
          result.strIngredient1.toLowerCase().includes(term.toLowerCase()),
          result.strIngredient2.toLowerCase().includes(term.toLowerCase())
        );
      })
    );
  }, [term, results]);
  const searchResults = results.map((result) => {
    if (
      term ===
      (result.strDrink || result.strIngredient1 || result.strIngredient2)
    ) {
      return (
        <>
          <div key={result.idDrink}>{result.strDrink}</div>
          <div>{result.strIngredient1}</div>
        </>
      );
    } else {
      return null;
    }
  });
  return (
    <Wrapper>
      <Search
        type="text"
        placeholder="재료 또는 이름을 검색하세요"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>{searchResults}</div>
    </Wrapper>
  );
};
export default Searchs;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  color: white;
`;
const Search = styled.input`
  margin: 30px 0px;
  width: 300px;
  height: 35px;
  background: none;
  color: white;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  :focus {
    color: white;
    background: none;
    width: 500px;
  }
`;
