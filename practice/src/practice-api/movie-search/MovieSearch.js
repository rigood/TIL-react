import axios from "axios";
import { useState, useEffect, useCallback, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
const db = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "ko-KR",
    region: "kr",
  },
});

function getPosterPath(path) {
  if (!path) return "";

  return `https://image.tmdb.org/t/p/w500/${path}`;
}

export async function getMovieSearch(query, pageParam) {
  const params = { query: query, page: pageParam };

  const response = await db.get("search/movie", {
    params,
  });

  return response;
}

function Main() {
  const initialQuery = "Harry";
  const [query, setQuery] = useState(initialQuery);

  const {
    data: movieData,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["movie", query],
    ({ pageParam = 1 }) => getMovieSearch(query, pageParam),
    {
      select: (data) => ({
        movies: data.pages.flatMap((page) => page.data.results),
        count: data.pages[0].data.total_results,
      }),
      getNextPageParam: (lastPage) =>
        lastPage.data.page < lastPage.data.total_pages &&
        lastPage.data.page + 1,
    }
  );

  console.log(isLoading, movieData);

  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(inputRef.current.value);
  };

  const observer = useRef();
  const lastMovieRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        {
          rootMargin: "100px",
        }
      );

      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage, fetchNextPage]
  );

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    inputRef.current.value = initialQuery;
    inputRef.current.focus();
  }, []);

  return (
    <Wrapper>
      <AppTitle>영화 검색</AppTitle>

      <Form onSubmit={onSubmit}>
        <Input
          type="search"
          required
          placeholder="영화 제목을 입력해주세요."
          ref={inputRef}
        />
        <Button type="submit">검색</Button>
      </Form>

      {!isLoading && (
        <MovieCount>
          {movieData?.count === 0
            ? "검색 결과가 없습니다."
            : "검색 결과 총 " + movieData?.count + "개"}
        </MovieCount>
      )}

      <MovieList>
        {movieData?.movies.map((movie, index) => {
          const key = movie.id + "/" + index;
          if (movieData?.movies.length !== index + 1) {
            return (
              <Movie key={key}>
                <Poster imgUrl={getPosterPath(movie.backdrop_path)} />
                <Title>{movie.title}</Title>
              </Movie>
            );
          } else {
            return (
              <Movie key={key} ref={lastMovieRef}>
                <Poster imgUrl={getPosterPath(movie.backdrop_path)} />
                <Title>{movie.title}</Title>
              </Movie>
            );
          }
        })}
      </MovieList>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
`;

const AppTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  padding: 10px;

  &::-webkit-search-decoration:hover,
  &::-webkit-search-cancel-button:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: gray;
  color: white;
  word-break: keep-all;
`;

const MovieCount = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 30px;
`;

const Movie = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Poster = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  background-color: lightgray;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
`;

const Title = styled.span`
  font-size: 14px;
  color: gray;
`;
