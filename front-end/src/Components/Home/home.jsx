import "./home.scss";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { OneMonth } from "../charts/oneMonth/oneMonth";

import { ThreeMonths } from "../charts/threeMonths/threeMonths";

import { SixMonths } from "../charts/sixMonths/sixMonths";

import { OneYear, YearData } from "../charts/oneYear/oneYear";

export const Home = () => {
  const navigate = useNavigate();
  
  const checkLogin = () => {
    // const isLoggedin = sessionStorage.getItem("username") !== null;
    // if (!isLoggedin) {
    //   navigate("/");
    // }
  }

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
        <YearData />
      </div>
    </div>
  );
};
