import { useState, useRef, useMemo } from "react";

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

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h1>Search-filter</h1>
      <form>
        <label>Search : </label>
        <input type="search" onChange={onChange} />
      </form>
      <br />
      <form onSubmit={onSubmit}>
        <label>New Item : </label>
        <input type="text" ref={inputRef} />
        <button type="submit">ADD</button>
      </form>
      <h1>Item List ▼</h1>
      <ul>
        {filteredItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchFilter;
