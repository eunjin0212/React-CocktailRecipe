import React from "react";
import Cocktail from "./Cocktail";

const List = ({ cocktails }) => {
  if (cocktails.length < 1) {
    return <h2>최소한 두 글자를 입력해주세요!</h2>;
  }
  return (
    <div>
      <div>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default List;
