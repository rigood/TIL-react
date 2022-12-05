import { useState } from "react";
import data from "./data";
import SliderBtn from "./SliderBtn";
import "./style.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveToPrevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex((prev) => prev - 1);
    } else {
      setSlideIndex(data.length);
    }
  };

  const moveToNextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex((prev) => prev + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className="slider-container">
        {data.map((person, index) => {
          return (
            <div
              className={slideIndex === index + 1 ? "slide active" : "slide"}
              key={person.id}
            >
              <img
                className="profile-img"
                src={process.env.PUBLIC_URL + `/img/slider/${index + 1}.jpg`}
              />
              <div className="profile-name">{person.name}</div>
              <div className="profile-nickname">{person.nickname}</div>
            </div>
          );
        })}
        <SliderBtn moveSlide={moveToPrevSlide} direction="prev" />
        <SliderBtn moveSlide={moveToNextSlide} direction="next" />
        <div className="dot-container">
          {Array.from({ length: data.length }).map((dot, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "dot current" : "dot"}
              onClick={() => moveDot(index + 1)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
