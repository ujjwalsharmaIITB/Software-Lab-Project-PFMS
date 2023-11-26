/*
    Created by Ujjwal Sharma ,
    23M0837 , 23M0837@iitb.ac.in
    github@ujjwalsharmaIITB
*/

/*
    This Component is the Navigation Bar
    It displays the Logo , App Name , Username
*/

import "./home.scss";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { OneMonth } from "../charts/oneMonth/oneMonth";

import { ThreeMonths } from "../charts/threeMonths/threeMonths";

import { SixMonths } from "../charts/sixMonths/sixMonths";

import { OneYear } from "../charts/oneYear/oneYear";

export const Home = () => {
  const navigate = useNavigate();
  
  // this code is to check if user is logged in else it will redirect to login page
  const checkLogin = () => {
    const isLoggedin = sessionStorage.getItem("username") !== null;
    if (!isLoggedin) {
      navigate("/");
    }
  }
// this code will run only once when the component is mounted to check if user is logged in else it will redirect to login page
  useEffect(() => {
    console.log("Session User Name", sessionStorage.getItem("username"));
    checkLogin();
  }, []);

  return (
    <div className="home">
      <div className="box oneMonth">
        <OneMonth />
      </div>

      <div className="box threeMonth">
        <ThreeMonths />
      </div>

      <div className="box sixMonth">
        <SixMonths />
      </div>

      <div className="box oneYear">
        <OneYear />
      </div>
    </div>
  );
};
