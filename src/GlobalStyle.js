import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

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