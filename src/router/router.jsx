import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Home from "../pages/Home";
import Error from "../component/Error";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import AddTourismSpot from "../pages/AddTourismSpot";
import AllTourismSpot from "../pages/AllTourismSpot";
import MyTourismSpot from "../pages/MyTourismSpot";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      // errorElement: <Error />,
      children:[
        {
            path:'/',
            element: <Home />,
            loader: ()=>fetch('http://localhost:5000/tourism-sport')
        },
        {
          path:'/registration',
          element: <Registration />
        },
        {
          path:'/login',
          element: <Login />
        },
        {
          path:'/add_tourism_spot',
          element: <AddTourismSpot />
        },
        {
          path:'/all_tourism_spot',
          element: <AllTourismSpot />,
          loader: ()=>fetch('http://localhost:5000/all-tourism-sport')
        },
        {
          path: '/my_tourism_spot',
          element:<MyTourismSpot />
        }
      ]
    },
  ]);
