import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../../assets/images/logos/Frame.png";
import "./_headerMain.scss";

const HeaderMain = () => {
  return (
    <main>
      <div className="row">
        <div className="col-12 col-md-4 header-main__left mt-2 mt-lg-5 pt-3">
          <h1>Let’s Grow Your Brand To The Next Level</h1>
          <p className="text-justify pr-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <Link to="/login">
            <button className="brand-btn">Hire us</button>
          </Link>
        </div>
        <div className="col-12 col-md-6 offset-md-1 header_main-right">
          <img src={bannerImg} alt="" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
