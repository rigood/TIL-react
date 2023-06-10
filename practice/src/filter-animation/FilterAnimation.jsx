import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Movie from "./Moive";
import Filter from "./Filter";

function FilterAnimation() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`
    );
    const movies = await data.json();

    setPopularMovies(movies.results);
    setFilteredMovies(movies.results);
    setGenres([...new Set(movies.results.map((movie) => movie.genre_ids[0]))]);
  };

  return (
    <Wrapper>
      <Title>오늘의 인기영화</Title>
      <Filter
        genres={genres}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setFilteredMovies={setFilteredMovies}
        popularMovies={popularMovies}
      />
      <PopularMovies layout>
        <AnimatePresence>
          {filteredMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </PopularMovies>
    </Wrapper>
  );
}

export default FilterAnimation;

const Wrapper = styled.div`
  margin: max(4rem, 4%) 10%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  margin-bottom: 2rem;
`;

const PopularMovies = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;
