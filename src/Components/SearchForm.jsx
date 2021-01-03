import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const SearchForm = ({ setSearchTerm }) => {
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchValue = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          name="name"
          id="name"
          onChange={searchCocktail}
          ref={searchValue}
        />
      </form>
    </Wrapper>
  );
};

export default SearchForm;
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
