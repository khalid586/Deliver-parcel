import { createBrowserRouter } from "react-router-dom";
import Root from '../Root'
import Homepage from '../Pages/Homepage'
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage"
import RegisterPage from '../Pages/RegisterPage'
import ProfilePage from "../Pages/ProfilePage";
import OrderPage from "../Pages/OrderPage";
import ProtectedRoute from "./ProtectedRoute";
import Myparcels from "../Pages/MyParcels";
import UsersPage from "../Pages/admin/UsersPage";

const  router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>, 
      children:[
        {
          index:true,
          element:<Homepage></Homepage>,          
        },
        {
          path:'/login',
          element:<LoginPage></LoginPage>         
        },
        {
          path:'/register',
          element:<RegisterPage></RegisterPage>
        },
        {
          path:'/profile',
          element:<ProtectedRoute><ProfilePage></ProfilePage></ProtectedRoute>
        },
        {
          path:'/place_order',
          element:<ProtectedRoute><OrderPage></OrderPage></ProtectedRoute>
        },
        {
          path:'/my_parcels',
          element:<ProtectedRoute><Myparcels></Myparcels></ProtectedRoute>
        },
        {
          path:'/users',
          element:<ProtectedRoute><UsersPage></UsersPage></ProtectedRoute>
        },
      ]
    },
  ]);

export default router;