import { useState, useEffect } from "react";
import styled from "styled-components";
import backgroundImage from "./assets/backgroundImage.jpg";

function Parallax() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Background position={position} positionDivider={2}>
        <p>
          님 그리움에 지쳐버린 사랑은
          <br />
          향기 없는 꽃이 되었소
        </p>
      </Background>
      <Message position={position}>
        안녕하세요
        <br />
        미스터트롯2 TOP7 가수 진욱입니다
        <br />
        더 좋은 노래로 보답하겠습니다
        <br />
      </Message>
    </Wrapper>
  );
}

export default Parallax;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Background = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${backgroundImage});
  background-position-y: ${({ position, positionDivider }) =>
    position / positionDivider + "px"};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  p {
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
  }
`;

const Message = styled.div`
  align-self: flex-end;
  text-align: end;
  font-size: 5rem;
  margin: 50px 20px 100px;
  transform: translateX(${({ position }) => -position + "px"});
`;
