import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "../fonts/Poppins-Regular.ttf";
import PoppinsBold from "../fonts/Poppins-Bold.ttf";
import Lobster from "../fonts/Lobster-Regular.ttf";
import Lilita from "../fonts/LilitaOne-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Lobster';
    src: url(${Lobster}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lilita';
    src: url(${Lilita}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }


  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

`;