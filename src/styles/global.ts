import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --white: #fff;
    
    --gray-100: #f5f5f7;
    --gray-200: #e3e4e6;
    --gray-600: #535257;
    --gray-650: #48494d;
    --gray-700: #191a1c;

    --red-400: #e83f5b;

    --green-400: #52d987;

    --blue-300: #3585f3;
    --blue-500: #3e76af;

    --yellow-500: #eba417;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html { 
    @media (max-width:1080px) {
      font-size: 93.75%
    }
    @media (max-width:1080px) {
      font-size: 87.5%
    }
  }

  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, 
  input, 
  textarea, 
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6, 
  strong {
    font-weight: 600;
    font-family: 'Barlow Condensed', sans-serif;
  }
  strong {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
