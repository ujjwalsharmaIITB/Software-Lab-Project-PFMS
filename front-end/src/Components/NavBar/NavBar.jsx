/*
    Created by Ujjwal Sharma ,
    23M0837 , 23M0837@iitb.ac.in
    github@ujjwalsharmaIITB
*/

/*
    This Component is the Navigation Bar
    It displays the Logo , App Name , Username
*/

import "./NavBar.scss";

import logoutSVG from "../Assets/logout.png";
import userImg from "../Assets/username.png";

import { useNavigate } from "react-router-dom";

export const NavBar = () => {

  const navigate = useNavigate();

  const logout = () => {
    console.log("logout");
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="logo">
        <span> Personal Financial Management System</span>
      </div>

      <div className="icons">
        <img src={userImg} alt="" className="userIMG" />
        <div className="userInfo">
          <span>{sessionStorage.getItem("name")}</span>
        </div>
        <img src={logoutSVG} alt="" className="settingsIMG" onClick={logout} />
      </div>
    </div>
  );
};
