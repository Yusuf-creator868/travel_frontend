import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainLayout from "./MainLayout";
import Register from "./authentication/registration";
import Login from "./authentication/login";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
            <MainLayout/>
    ),

    children: [

      { index: true, element: <App /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login/> },
    

    ],
  },
]);

export default function Main() {
  return <RouterProvider router={router} />
}