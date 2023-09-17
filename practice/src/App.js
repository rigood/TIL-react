import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

// useMemo 연습
import SearchFilter from "./practice-hooks/useMemo/search-filter/SearchFilter";

// useReducer 연습
import Attendance from "./practice-hooks/useReducer/attendance/Attendance";
import Bank from "./practice-hooks/useReducer/bank/Bank";

// API 활용
import MovieSearch from "./practice-api/movie-search/MovieSearch";
import BookSearch from "./practice-api/book-search/BookSearch";
import Pokemons from "./practice-api/pokemon/Pokemons";

// 슬라이더 구현
import Slider from "./practice-ui/slider/Slider";
import Slider2 from "./practice-ui/slider/Slider2";
import InfiniteSlider from "./practice-ui/slider/InfiniteSlider";
import DragSlider from "./practice-ui/slider/DragSlider";

// UI 연습
import HashTag from "./practice-ui/hashtag/HashTag";
import Accordion from "./practice-ui/accordion/Accordion";
import FilterAnimation from "./practice-ui/filter-animation/FilterAnimation";
import Parallax from "./practice-ui/parallax/Parallax";

const tabs = [
  {
    title: "검색필터",
    tags: ["useMemo"],
    component: <SearchFilter />,
  },
  {
    title: "출석부",
    tags: ["useReducer"],
    component: <Attendance />,
  },
  {
    title: "은행 입출금",
    tags: ["useReducer"],
    component: <Bank />,
  },
  {
    title: "영화 검색",
    tags: ["무한스크롤", "useInfiniteQuery", "axios"],
    component: <MovieSearch />,
  },
  {
    title: "도서 검색",
    tags: ["무한스크롤", "useState", "axios"],
    component: <BookSearch />,
  },
  {
    title: "포켓몬 목록",
    tags: ["페이지네이션", "useState", "axios"],
    component: <Pokemons />,
  },
  {
    title: "슬라이더1",
    tags: ["position:absolute"],
    component: <Slider />,
  },
  {
    title: "슬라이더2",
    tags: ["translateX"],
    component: <Slider2 />,
  },
  {
    title: "무한 슬라이더",
    tags: ["translateX", "setTimeout"],
    component: <InfiniteSlider />,
  },
  {
    title: "드래그 슬라이더",
    tags: ["scrollWidth", "offsetWidth"],
    component: <DragSlider />,
  },
  {
    title: "해쉬태그",
    tags: [],
    component: <HashTag />,
  },
  {
    title: "아코디언 메뉴",
    tags: [],
    component: <Accordion />,
  },
  {
    title: "패럴렉스",
    tags: [],
    component: <Parallax />,
  },
  {
    title: "영화 필터링 애니메이션",
    tags: ["framer-motion", "fetch"],
    component: <FilterAnimation />,
  },
];

const LOCALSTORAGE_KEY = "rigood_TIL_react_tabIndex";

export default function App() {
  const [tabIndex, setTabIndex] = useState(
    +localStorage.getItem(LOCALSTORAGE_KEY) ?? 0
  );

  const handleTabIndex = (index) => {
    localStorage.setItem(LOCALSTORAGE_KEY, index);
    setTabIndex(index);
  };

  return (
    <>
      <GlobalStyles />
      <SideBar>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab
              key={tab.title}
              $active={tabIndex === index}
              onClick={() => handleTabIndex(index)}
            >
              <span>{tab.title}</span>
              <TagList>
                {tab.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
            </Tab>
          ))}
        </TabList>
      </SideBar>
      <Wrapper>{tabs[tabIndex].component}</Wrapper>
    </>
  );
}

const SideBar = styled.nav``;

const TabList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  min-height: 100vh;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fafafa;
  border-right: 1px solid lightgray;
`;

const Tab = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 16px;
    font-weight: ${({ $active }) => $active && "bold"};
    color: ${({ $active }) => $active && "dodgerblue"};
    word-break: keep-all;
    cursor: pointer;
  }

  @media screen and (hover: hover) and (pointer: fine) {
    span:hover {
      text-decoration: ${({ $active }) => ($active ? "none" : "underline")};
    }
  }
`;

const Wrapper = styled.div`
  padding-left: 300px;
  min-height: 100vh;
  overflow-x: auto;
`;

const TagList = styled.ul`
  display: flex;
  gap: 5px;
`;

const Tag = styled.li`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  color: silver;
`;
