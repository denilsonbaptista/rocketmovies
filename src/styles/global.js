import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../styles/deviceBreakpoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE_100};    
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .wrapper {
    width: min(150rem, 90%);
    justify-self: center;

    grid-area: content;

    overflow-y: auto;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
    cursor: move;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.2rem;
  }
`
