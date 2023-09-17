import styled from "styled-components";
import { motion } from "framer-motion";

function getPosterPath(path) {
  if (!path) return "";
  return `https://image.tmdb.org/t/p/w500/${path}`;
}

function Moive({ movie }) {
  const { title, poster_path } = movie;

  return (
    <Wrapper
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>{title}</h2>
      <Poster imgUrl={getPosterPath(poster_path)} alt={movie.title}></Poster>
    </Wrapper>
  );
}

export default Moive;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  h2 {
    padding: 0 5px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
  }
`;

const Poster = styled.div`
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  background-color: lightgray;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  margin-bottom: 10px;
`;
