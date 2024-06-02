import { createBrowserRouter } from "react-router-dom";
import Root from '../Root'
import Homepage from '../Pages/Homepage'
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage"
import RegisterPage from '../Pages/RegisterPage'

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
      ]
    },
  ]);

export default router;