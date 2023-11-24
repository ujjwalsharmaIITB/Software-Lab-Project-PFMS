import "./home.scss";
import { redirect, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { OneMonth } from "../charts/oneMonth/oneMonth";

import { ThreeMonths } from "../charts/threeMonths/threeMonths";

import { SixMonths } from "../charts/sixMonths/sixMonths";

import { OneYear, YearData } from "../charts/oneYear/oneYear";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ss", sessionStorage.getItem("username"));

    if (sessionStorage.getItem("username") === null) {
      console.log("redirecting to login");
      redirect("/");
    }
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
