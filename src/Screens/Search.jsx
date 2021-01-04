import React, { useState, useEffect } from "react";
import List from "../Components/List";
import SearchForm from "../Components/SearchForm";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const getDrinks = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
          };
        });

        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDrinks();
  }, [searchTerm]);

  return (
    <main style={{ width: "100%" }}>
      <SearchForm setSearchTerm={setSearchTerm} />
      <List cocktails={cocktails} />
    </main>
  );
};

export default Search;
