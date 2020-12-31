import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useFetch from "../Components/useFetch";

const Searchs = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
      const results = Object.values(data.drinks).filter(({ strDrink }) =>
        strDrink.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }
    fetchUrl();
  }, [searchTerm]);

  return (
    <Wrapper>
      <Search
        type="text"
        placeholder="재료 또는 이름을 검색하세요"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.strDrink}</li>
        ))}
      </ul>
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
  margin-top: 30px;
  border: none;
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
const Form = styled.form``;
const Submit = styled.input`
  boder: none;
`;
