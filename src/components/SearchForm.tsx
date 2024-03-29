import React, { FormEvent, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const SearchForm = ({ setSearchTerm }: { setSearchTerm: (arg: string) => void }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (inputEl.current !== null) inputEl.current.focus();
  });

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    if (inputEl.current !== null) setSearchTerm(inputEl.current.value);
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Search type="text" name="name" id="name" placeholder="이름이나 재료를 검색하세요." onChange={searchCocktail} ref={inputEl} />
      </Form>
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
const Form = styled.form``;
const Search = styled.input`
  margin: 30px 0px;
  width: 300px;
  height: 35px;
  color: black;
  border: none;
  text-indent: 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  :focus {
    outline: none;
    border-radius: 20px;
    color: black;
    background-color: rgba(255, 255, 255, 0.5);
    width: 500px;
  }
  @media only screen and (max-width: 460px) {
    :focus {
      width: 350px;
    }
  }
`;
