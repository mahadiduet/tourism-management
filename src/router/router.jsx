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
import ViewDetails from "../pages/ViewDetails";
import UpdateTourism from "../pages/UpdateTourism";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CountryTourism from "../pages/CountryTourism";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/tourism-sport')
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/add_tourism_spot',
        element: <PrivateRoute>
          <AddTourismSpot />
        </PrivateRoute>
      },
      {
        path: '/all_tourism_spot',
        element: <AllTourismSpot />,
        loader: () => fetch('http://localhost:5000/all-tourism-sport')
      },
      {
        path: '/my_tourism_spot',
        element: <PrivateRoute>
          <MyTourismSpot />
        </PrivateRoute>
      },
      {
        path: '/tourism-details/:id',
        element: <PrivateRoute>
          <ViewDetails />
        </PrivateRoute>
      },
      {
        path: '/update-tourism/:id',
        element: <PrivateRoute>
          <UpdateTourism />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/all-tourism-sport/${params.id}`)
      },
      {
        path: '/country/:id',
        element: <CountryTourism />,
        loader: ({ params }) => fetch(`http://localhost:5000/country/${params.id}`)
      }
    ]
  },
]);
