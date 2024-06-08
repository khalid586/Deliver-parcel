import { createBrowserRouter } from "react-router-dom";
import Root from '../Root'
import Homepage from '../Pages/Homepage'
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage"
import RegisterPage from '../Pages/RegisterPage'
import ProfilePage from "../Pages/Shared/ProfilePage";
import OrderPage from "../Pages/OrderPage";
import ProtectedRoute from "./ProtectedRoute";
import Myparcels from "../Pages/MyParcels";
import UsersPage from "../Pages/admin/UsersPage";
import SpecificRoute from "./SpecificRoute";
import Deliveries from "../Pages/Shared/Deliveries";
import UpdatePage from "../Pages/UpdatePage";

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
          element:<ProtectedRoute><SpecificRoute currRole='user'><OrderPage></OrderPage></SpecificRoute></ProtectedRoute>
        },
        {
          path:'/my_parcels',
          element:<ProtectedRoute><SpecificRoute currRole='user'><Myparcels></Myparcels></SpecificRoute></ProtectedRoute>
        },
        {
          path:'/users',
          element:<ProtectedRoute><SpecificRoute currRole='admin'><UsersPage></UsersPage></SpecificRoute></ProtectedRoute>
        },
        {
          path:'/deliveries',
          element:<ProtectedRoute><SpecificRoute currRole='admin'><Deliveries></Deliveries></SpecificRoute></ProtectedRoute>
        },
        {
          path:'/deliveries/:id',
          element:<ProtectedRoute><SpecificRoute currRole='rider'><Deliveries></Deliveries></SpecificRoute></ProtectedRoute>
        },
        {
          path:'/update/:id',
          element:<ProtectedRoute><SpecificRoute currRole='user'><UpdatePage></UpdatePage></SpecificRoute></ProtectedRoute>
        },
      ]
    },
  ]);

export default router;