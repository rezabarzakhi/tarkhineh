import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Footer from "./Components/Footer/Footer";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <div className="app">
        <Header />
        {router}
        <Footer />
      </div>
    </>
  );
}

export default App;
