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

export default function App() {
  return (
    <>
      <GlobalStyles />
      {/* useMemo 연습*/}
      {/* <SearchFilter /> */}

      {/* useReducer 연습*/}
      {/* <Attendance /> */}
      {/* <Bank /> */}

      {/* API 활용 */}

      {/* axios, useInfiniteQuery, Intersection Observer API 무한스크롤*/}
      {/* <MovieSearch /> */}

      {/* axios, useState, Intersection Observer API 무한스크롤*/}
      {/* <BookSearch /> */}

      {/* axios, useState, 페이지네이션 */}
      {/* <Pokemons /> */}

      {/* 슬라이더 */}
      {/* <Slider /> */}
      {/* <Slider2 /> */}
      {/* <InfiniteSlider /> */}
      {/* <DragSlider /> */}

      {/* 해쉬태그 */}
      {/* <HashTag /> */}

      {/* 아코디언 메뉴*/}
      {/* <Accordion /> */}

      {/* 영화 목록 필터 애니메이션 */}
      {/* <FilterAnimation /> */}

      {/* 패러렉스 */}
      {/* <Parallax /> */}
    </>
  );
}
