import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Home from "../pages/Home";
import Error from "../component/Error";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      errorElement: <Error />,
      children:[
        {
            path:'/',
            element: <Home />
        }
      ]
    },
  ]);
