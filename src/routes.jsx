// import { Home, Profile, SignIn, SignUp } from "@/pages";

import Home from "./pages/home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";


export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "/product",
    element: <About/>,
  },
  {
    name: "Our Services",
    path: "/service",
    element: <Services/>,
  },
    {
    name: "Gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact/>,
  },
  // {
  //   name: "Order",
  //   path: "/order",
  //   element: <Printing />,
  // }
];

export default routes;
