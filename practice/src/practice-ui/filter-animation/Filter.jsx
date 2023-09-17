import styled, { css } from "styled-components";

const genreList = {
  28: "액션",
  12: "어드벤쳐",
  16: "애니메이션",
  35: "코메디",
  80: "범죄",
  99: "다큐멘터리",
  18: "드라마",
  10751: "가족",
  14: "판타지",
  36: "역사",
  27: "공포",
  10402: "음악",
  9648: "미스테리",
  10749: "로맨스",
  878: "SF",
  10770: "TV쇼",
  53: "스릴러",
  10752: "전쟁",
  37: "서부",
};

function Filter({
  genreIndexs,
  activeGenreIndex,
  setActiveGenreIndex,
  allMoviesIndex,
}) {
  return (
    <Wrapper>
      <Button
        active={activeGenreIndex === allMoviesIndex}
        onClick={() => setActiveGenreIndex(allMoviesIndex)}
      >
        All
      </Button>
      {genreIndexs?.map((genreIndex) => (
        <Button
          key={genreIndex}
          active={activeGenreIndex === genreIndex}
          onClick={() => setActiveGenreIndex(genreIndex)}
        >
          {genreList[genreIndex]}
        </Button>
      ))}
    </Wrapper>
  );
}

export default Filter;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const Button = styled.button.attrs({ type: "button" })`
  min-width: 5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid lightgray;
  font-weight: bold;
  color: black;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: black;
      border-color: black;
      color: white;
    `}
`;
