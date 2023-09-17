import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(BASE_URL);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const currentPageNumber =
    new URL(currentPageUrl).searchParams.get("offset") / 20 + 1;

  useEffect(() => {
    let cancel;

    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemons(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <Wrapper>
      <AppTitle>포켓몬 목록</AppTitle>

      <PokemonList>
        {pokemons.map((pokemon, index) => (
          <Pokemon key={pokemon}>{pokemon}</Pokemon>
        ))}
      </PokemonList>
      <Pagination>
        <Button disabled={!prevPageUrl} onClick={gotoPrevPage}>
          이전
        </Button>
        <span>{currentPageNumber}</span>
        <Button disabled={!nextPageUrl} onClick={gotoNextPage}>
          다음
        </Button>
      </Pagination>
    </Wrapper>
  );
}

export default Pokemons;

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

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button.attrs({ type: "button" })`
  padding: 5px 10px;
  background-color: ${({ disabled }) => (disabled ? "lightgray" : "orange")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: white;
  word-break: keep-all;
`;

const PokemonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Pokemon = styled.li`
  &::first-letter {
    text-transform: uppercase;
  }
`;
