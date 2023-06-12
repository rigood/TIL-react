import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PretendardExtraBold from "./vote/assets/Pretendard-ExtraBold.subset.woff2";

const GlobalStyles = createGlobalStyle`
${reset}

@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url(${PretendardExtraBold}) format('woff');
}

:root{
  --primary: #1e3c84;
}

*{
    box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body{
  font-family: 'Pretendard-Regular';
  /* &::-webkit-scrollbar{
    display: none
  } */
  background-color: 	#DCDCDC;
  font-size: 1.6rem;
}

ul, li{
  list-style: none;
}

a{
  text-decoration: none;
  color: inherit;
}

button{
  padding: 0;
}

select{
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
}

button{
  background-color: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

input{
  border: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
}
`;

export default GlobalStyles;
