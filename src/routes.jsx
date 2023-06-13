import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Branches from "./Pages/branches/Branches";
let routes = [
    { path: "/", element: <Home /> },
    { path: "/menu", element: <Menu /> },
    { path: "/branches/:ID", element: <Branches /> },
    // { path: "/", element: <Home /> },
    // { path: "/", element: <Home /> },
    // { path: "/", element: <Home /> },

];

export default routes