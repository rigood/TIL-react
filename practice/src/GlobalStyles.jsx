import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
    font-family: 'HANAMDAUM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/HANAMDAUM.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'TTTtangsbudaejjigaeB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}


:root{

}


*{
    box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body{
  font-family: 'Pretendard-Regular';
  font-size: 1.6rem;
  line-height: 1.2;
  color: #333;
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
