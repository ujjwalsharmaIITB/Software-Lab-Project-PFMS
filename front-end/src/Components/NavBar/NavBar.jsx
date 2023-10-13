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

import settingsSVG from "../Assets/settings.svg";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>P.F.M.S</span>
      </div>

      <div className="icons">
        <div className="userInfo">
          <span>User Name</span>
        </div>
        <img src={settingsSVG} alt="" className="userIMG" />
      </div>
    </div>
  );
};
