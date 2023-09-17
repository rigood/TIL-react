import { useState } from "react";
import styled from "styled-components";
import data from "./data";

function Slider2() {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveToPrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const moveToNextSlide = () => {
    setSlideIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <Container>
      <Arrow direction="prev" onClick={moveToPrevSlide}>
        ◀
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {data.map((character) => (
          <Slide key={character.id}>
            <Photo
              src={process.env.PUBLIC_URL + `/img/slider/${character.img}`}
            />
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="next" onClick={moveToNextSlide}>
        ▶
      </Arrow>
      <DotContainer>
        {data.map((character, index) => (
          <Dot
            key={character.id}
            className={index === slideIndex ? "active" : null}
            onClick={() => moveDot(index)}
          />
        ))}
      </DotContainer>
    </Container>
  );
}

export default Slider2;

const Container = styled.div`
  width: 200px;
  height: 200px;
  margin: 100px auto;
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ slideIndex }) => slideIndex * -100 + "%"});
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: ${({ direction }) => direction === "prev" && "0px"};
  right: ${({ direction }) => direction === "next" && "0px"};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: pink;
  cursor: pointer;
  &.active {
    background-color: skyblue;
  }
`;
