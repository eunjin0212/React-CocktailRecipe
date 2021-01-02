import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Detail from "./Detail";

const Searchs = () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
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

  return (
    <Wrapper>
      <Search
        type="text"
        placeholder="재료 또는 이름을 검색하세요"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {search.map((result, i) => (
        <div key={i}>
          {" "}
          {(result.strDrink, result.strIngredient1, result.strIngredient2)}
        </div>
      ))}
    </Wrapper>
  );
};
export default Searchs;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
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
