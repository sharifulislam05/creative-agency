import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({ service, handleOrderService }) => {
  const { title, description, image, _id } = service;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div
      className="col-12 col-md-4 text-center service-card p-3 p-md-5"
      onClick={() => handleOrderService(_id)}
    >
      <animated.div
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <img src={`data:image/png;base64, ${image.img}`} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </animated.div>
    </div>
  );
};

export default ServiceCard;
