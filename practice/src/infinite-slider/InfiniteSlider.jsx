import { useState } from "react";
import styled from "styled-components";
import { data } from "./data";

function getNewArray(arr) {
  const firstSlide = arr[0];
  const lastSlide = arr[arr.length - 1];
  const newArray = [lastSlide, ...arr, firstSlide];
  return newArray;
}

function InfiniteSlider() {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState("transform 500ms ease-in-out");

  const oldArrayLength = data.length;
  const newArray = getNewArray(data);

  const moveWithoutTransition = (index) => {
    setTimeout(() => {
      setIndex(index);
      setTransition("");
    }, 500);
  };

  const handleNextClick = () => {
    setIndex((prev) => prev + 1);
    setTransition("transform 500ms ease-in-out");

    if (index === oldArrayLength) {
      moveWithoutTransition(1);
    }
  };

  const handlePrevClick = () => {
    setIndex((prev) => prev - 1);
    setTransition("transform 500ms ease-in-out");

    if (index === 1) {
      moveWithoutTransition(oldArrayLength);
    }
  };

  return (
    <Container>
      <SlideContainer>
        <Button direction="prev" onClick={handlePrevClick}>
          이전
        </Button>
        <Wrapper
          index={index}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: `${transition}`,
          }}
        >
          {newArray.map((item) => (
            <Slide key={item.id}>
              <img src={process.env.PUBLIC_URL + `/img/slider/${item.img}`} />
            </Slide>
          ))}
        </Wrapper>
        <Button direction="next" onClick={handleNextClick}>
          다음
        </Button>
      </SlideContainer>
    </Container>
  );
}

export default InfiniteSlider;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${({ direction }) => direction === "prev" && "0px"};
  right: ${({ direction }) => direction === "next" && "0px"};
  width: 50px;
  height: 50px;
  background-color: pink;
  cursor: pointer;
  z-index: 1;
`;
