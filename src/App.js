import React from "react";
import { GlobalStyle } from "./globalStyles";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
