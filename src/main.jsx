import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/global"
import theme from "./styles/themes"

import { SingIn } from "./pages/SingIn"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SingIn />
    </ThemeProvider>
  </React.StrictMode>
)
