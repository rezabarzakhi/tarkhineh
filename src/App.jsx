import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  
  let router = useRoutes(routes);

  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;
