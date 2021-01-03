import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import bg from "../Assets/bg.jpg";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        color:inherit;
        text-decoration: none;
    }
    *{
        box-sizing:border-box;
    }
    body {
        background-image: url(${bg});
        background-repeat: repeat(colunm);
        background-size: cover;
        margin: 0px;
        padding: 0px;
        color: #2e363e;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        user-select: none;
        -ms-overflow-style: none; 
        &::-webkit-scrollbar { 
            display: none !important; 
        }
    }
}
`;

export default globalStyles;
