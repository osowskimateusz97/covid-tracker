import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');
@import "normalize.css";

*,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
body{
    height:100vh;
    font-family: 'Iceland',monospace;
    font-weight:400;
    max-width:80%;
    background-color: #f5f6fa;
    margin:0 auto;
    
}
*{
     &::-webkit-scrollbar-track,
  .MuiMenu-paper::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #aeafc9 !important;
  }

  &::-webkit-scrollbar,
  .MuiMenu-paper::-webkit-scrollbar {
    width: 12px;
    background-color: #1a1313;
  }

  &::-webkit-scrollbar-thumb,
  .MuiMenu-paper::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #41437a;
  }
}
`;

export default GlobalStyle;
