import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import AuthProvider from './Providers/AuthProvider.jsx';
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import UserProvider from './Providers/UserProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
)
