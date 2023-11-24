/*
    Created by Ujjwal Sharma ,
    23M0837 , 23M0837@iitb.ac.in
    github@ujjwalsharmaIITB
*/

/*
    This is the main component.
    It will render all the sub-components and 
    holds the logic for routing 
*/

import logo from "./logo.svg";
import "./App.scss";

// import './customCss.scss'

import { LoginSignup } from "./Components/LoginSignup/LoginSignup";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import { Home } from "./Components/Home/home";
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/menu";
import {AddInformation} from "./Components/AddInformation/AddInformation"
// This component is used for the main dashboard page in which
// different components like graphs , user parameters, etc
// will be mounted
// The child components will be mounted in place of <Outlet>
const Layout = () => {
  return (
    <div className="main">
      <NavBar />

      <div className="containerMain">
        <div className="menuContainer">
          <Menu />
        </div>

        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  // Routing Logic
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginSignup />,
    },
    // make childrens for outlet
    {
      path: "home",
      element: <Layout />,
      children: [
        // main route
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/home/add",
          element: <AddInformation />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
