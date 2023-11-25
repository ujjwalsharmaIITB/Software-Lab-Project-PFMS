/*
    Created by Ujjwal Sharma ,
    23M0837 , 23M0837@iitb.ac.in
    github@ujjwalsharmaIITB
*/

/*
    This Component is used for the menu part in the main dashboard page
*/

import "./menu.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Menu = () => {

  const navigate = useNavigate();

   async function generatePdf() {
    console.log("Generating PDF");
    
    const url = "/api/generatePDF/" + sessionStorage.getItem("username")

    window.open(url, "_blank")

  }

  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main Menu</span>

        <Link to="/" className="listItem">
          <span className="listItemTitle">Login/Signup</span>
        </Link>

        <Link to="/home" className="listItem">
          <span className="listItemTitle">Home</span>
        </Link>

        <Link to="/home/add" className="listItem">
          <span className="listItemTitle">Add Information</span>
        </Link>

        <Link className="listItem" onClick={generatePdf}>
          <span className="listItemTitle">Export To P.D.F</span>
        </Link>
      </div>
    </div>
  );
};
