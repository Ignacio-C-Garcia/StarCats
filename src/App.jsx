import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";

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
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
