import styled from "styled-components";
import { motion } from "framer-motion";

function Moive({ movie }) {
  return (
    <Wrapper
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
        alt={movie.title}
      ></img>
    </Wrapper>
  );
}

export default Moive;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    letter-spacing: -0.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
`;
