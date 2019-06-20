import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const mainFontStack = `sans-serif`;
const appBackgroundColor = '#fafafa';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    *, *:before, *:after {
      box-sizing: inherit;
    }
  }

  body {
    background: ${appBackgroundColor};
    font: 100% ${mainFontStack};
  }
  
  /* other global styles go here */
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
