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
import VoteApp from "./practice-ui/vote/VoteApp";
import Kanban from "./practice-ui/kanban/Kanban";

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
  {
    title: "투표 및 전자서명",
    tags: ["Canvas API", "모달", "localStorage", "useImperativeHandle"],
    component: <VoteApp />,
  },
  {
    title: "칸반보드",
    tags: ["react-beautiful-dnd", "recoil", "recoil-persist"],
    component: <Kanban />,
  },
];

export default tabs;
