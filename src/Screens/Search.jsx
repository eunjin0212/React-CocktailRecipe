import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Searchs = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setResults(res.data.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let update = results.filter(({ strDrink }) => {
    return strDrink.toLowerCase().includes(searchTerm);
  }, []);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Wrapper>
      <form>
        <Search
          type="text"
          placeholder="재료 또는 이름을 검색하세요"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <ul>
        {(searchTerm === "" ? results : update).map(
          ({ idDrink, strAlcoholic, strDrinkThumb, strDrink }) => (
            <ul>
              <li key={`${idDrink}`}>{strDrink}</li>
            </ul>
          )
        )}
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
const Results = styled.div``;
