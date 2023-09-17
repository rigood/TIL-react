import { useState, useRef, useMemo } from "react";
import styled from "styled-components";

function SearchFilter() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = inputRef.current.value;
    if (newItem === "") return;

    setItems((prev) => [...prev, newItem]);

    inputRef.current.value = "";
  };

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Wrapper>
      <Title>useMemo 서점</Title>

      <Form onSubmit={onSubmit}>
        <Label>책 이름 입력</Label>
        <Col>
          <Input type="text" ref={inputRef} />
          <Button type="submit">추가</Button>
        </Col>
      </Form>

      <Form>
        <Label>검색어 입력</Label>
        <Input type="search" onChange={onQueryChange} />
      </Form>

      <List>
        <Label>책 목록</Label>
        {filteredItems.length === 0 && (
          <ListItem>등록된 책이 없습니다.</ListItem>
        )}
        {filteredItems.map((item) => (
          <ListItem>- {item}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

export default SearchFilter;

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;

const Col = styled.div`
  display: flex;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: gray;
  color: white;
  word-break: keep-all;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.li``;
