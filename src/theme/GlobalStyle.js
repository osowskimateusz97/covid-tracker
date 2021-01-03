import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');
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
    background-color:rgb(201, 201, 201);
    margin:0 auto;
}
`;
 
export default GlobalStyle;