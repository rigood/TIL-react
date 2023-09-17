import { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";
import styled from "styled-components";
import LoadingBar from "./loadingBar.gif";

export default function BookSearch() {
  const [query, setQuery] = useState("harry");
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <Wrapper>
      <AppTitle>도서 검색</AppTitle>

      <Input
        type="search"
        placeholder="책 제목을 입력해주세요."
        value={query}
        onChange={handleSearch}
      />

      {error && (
        <StateIndicator>
          <span>에러 발생</span>
        </StateIndicator>
      )}

      <BookList>
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <Book ref={lastBookRef} key={book}>
                {index + 1}. {book}
              </Book>
            );
          } else {
            return (
              <Book key={book}>
                {index + 1}. {book}
              </Book>
            );
          }
        })}
      </BookList>

      {!error && !loading && books.length === 0 && (
        <NoBook>검색 결과가 없습니다.</NoBook>
      )}

      {!error && loading && (
        <StateIndicator>
          <img src={LoadingBar} alt="loading" />
        </StateIndicator>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
`;

const AppTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StateIndicator = styled.div`
  margin: 20px 0;
  text-align: center;

  img {
    width: 50px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  padding: 10px;
  margin-bottom: 10px;

  &::-webkit-search-decoration:hover,
  &::-webkit-search-cancel-button:hover {
    cursor: pointer;
  }
`;

const NoBook = styled.div`
  text-align: center;
`;

const BookList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

const Book = styled.li``;
