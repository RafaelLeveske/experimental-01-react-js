import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: #282A36;
  color: #CDCDCD;
  -webkit-font-smothing: antialiased;
}
body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  outline: 0;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;