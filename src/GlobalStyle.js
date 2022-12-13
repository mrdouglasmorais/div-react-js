import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,500&family=Rubik+80s+Fade&display=swap');

*{
  padding: 0;
  margin: 0;
}

h1, h2, h3 {
  font-family: 'Rubik 80s Fade', cursive;
}

h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
}

`

export default GlobalStyle