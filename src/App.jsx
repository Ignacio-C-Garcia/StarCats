import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/shopping/Cart";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/products/:category",
      element: <Products />,
    },
    {
      path: "/products/",
      element: <Products />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/ordenes",
      element: <Orders></Orders>,
    },
    {
      path: "*",

      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
