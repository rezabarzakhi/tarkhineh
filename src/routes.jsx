import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Branches from "./Pages/Branches/Branches";
import AboutUs from "./Pages/AboutUs/AboutUs";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/branches/:ID", element: <Branches /> },
  // { path: "/", element: <Home /> },
  // { path: "/", element: <Home /> },
  // { path: "/", element: <Home /> },
];

export default routes;
