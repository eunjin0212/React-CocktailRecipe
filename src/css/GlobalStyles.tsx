import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    color:inherit;
    text-decoration: none;
  }
  * {
    box-sizing:border-box;
  }
  body {
    background-color: rgb(33,33,33);
    margin: 0px;
    padding: 0px;
    color: whitesmoke;
    box-sizing: border-box;
    width: 100vw;
    height: 100%;
    user-select: none;
    -ms-overflow-style: none; 
    &::-webkit-scrollbar { 
        display: none !important; 
    }
  }
`;

export default globalStyles;
