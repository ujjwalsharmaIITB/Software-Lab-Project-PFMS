import "./home.scss";

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
