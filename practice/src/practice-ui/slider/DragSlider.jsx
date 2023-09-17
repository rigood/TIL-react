import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import images from "./images";

function DragSlider() {
  const [constraintWidth, setConstraintWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setConstraintWidth(
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    );
  }, []);

  return (
    <Wrapper>
      <Title>미스터트롯2 TOP7</Title>
      <Carousel ref={carouselRef}>
        <InnerCarousel
          drag="x"
          dragConstraints={{ right: 0, left: -constraintWidth }}
          whileTap={{ cursor: "grabbing" }}
        >
          {images.map((img) => (
            <ImgWrapper key={img}>
              <img src={img} alt="" />
            </ImgWrapper>
          ))}
        </InnerCarousel>
      </Carousel>
    </Wrapper>
  );
}

export default DragSlider;

const Wrapper = styled.div`
  margin: 5% 10%;
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

const InnerCarousel = styled(motion.div)`
  width: 100%;
  display: flex;
  column-gap: 2rem;
`;

const ImgWrapper = styled(motion.div)`
  min-width: 20rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;
