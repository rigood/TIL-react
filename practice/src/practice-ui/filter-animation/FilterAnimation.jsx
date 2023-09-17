import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Movie from "./Moive";
import Filter from "./Filter";

const ALL_MOVIES_INDEX = -1;
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

function FilterAnimation() {
  const [movies, setMovies] = useState([]);

  const genreIndexs = [...new Set(movies.map((movie) => movie.genre_ids[0]))];
  const [activeGenreIndex, setActiveGenreIndex] = useState(ALL_MOVIES_INDEX);

  const filteredMovies = useMemo(() => {
    return activeGenreIndex === ALL_MOVIES_INDEX
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(activeGenreIndex));
  }, [movies, activeGenreIndex]);

  const fetchPopularMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`
      );

      const data = await res.json();

      if (res.status !== 200) {
        throw new Error(data.status_message);
      }

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <Wrapper>
      <Title>오늘의 인기영화</Title>
      <Filter
        genreIndexs={genreIndexs}
        activeGenreIndex={activeGenreIndex}
        setActiveGenreIndex={setActiveGenreIndex}
        allMoviesIndex={ALL_MOVIES_INDEX}
      />
      <PopularMovies layout>
        <AnimatePresence>
          {filteredMovies?.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </PopularMovies>
    </Wrapper>
  );
}

export default FilterAnimation;

const Wrapper = styled.div`
  margin: max(64px, 4%) 10%;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const PopularMovies = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-column-gap: 10px;
  grid-row-gap: 40px;
`;
