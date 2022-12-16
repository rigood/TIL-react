import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

const db = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const API_KEY = "5836da8588c0e9fe7dc6f7c56764dae7";

export async function getMovieSearch(keyword) {
  const response = await db.get(
    `search/movie?api_key=${API_KEY}&query=${keyword}&language=ko-KR&region=kr`
  );
  return response;
}

function Main() {
  const keyword = "harry";
  const { data, loading } = useInfiniteQuery(["movie"], () =>
    getMovieSearch(keyword)
  );
  console.log(data);
  return <div>Main</div>;
}

export default Main;
