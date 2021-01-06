import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../../assets/images/carousel-1.png";
import carousel2 from "../../../assets/images/carousel-2.png";
import carousel3 from "../../../assets/images/carousel-3.png";
import carousel4 from "../../../assets/images/carousel-4.png";
import "./_works.scss";

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    cssEase: "linear",
    vertical: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className=" works-container">
      <div className="works-header">
        <h3 className="">
          {" "}
          Here are some of <span>our works</span>
        </h3>
      </div>
      <div className="w-75 container">
        <Slider {...settings}>
          <div>
            <img src={carousel3} alt="" />
          </div>
          <div>
            <img src={carousel1} alt="" />
          </div>
          <div>
            <img src={carousel2} alt="" />
          </div>
          <div>
            <img src={carousel4} alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Works;
