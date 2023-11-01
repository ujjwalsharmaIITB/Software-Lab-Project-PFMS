import "./home.scss";
<<<<<<< HEAD
export const Home = () => {
  return (
    <div className="home" text>
      <div className="box oneMonth">One Month</div>
=======

import {OneMonth} from "../charts/oneMonth/oneMonth";

import {ThreeMonths} from "../charts/threeMonths/threeMonths";

import {SixMonths} from "../charts/sixMonths/sixMonths";

import {OneYear} from "../charts/oneYear/oneYear";

export const Home = () => {
  return (
    <div className="home">
      <div className="box oneMonth"> 
        <OneMonth />
      </div>
>>>>>>> 3a038237d8d2e481aa58135fb256b0a3a32461eb

      <div className="box threeMonth">
        <ThreeMonths />
      </div>

      <div className="box sixMonth">
      <SixMonths/>
      </div>

      <div className="box oneYear">
        <OneYear/>
      </div>
    </div>
  );
};