import GlobalStyles from "./GlobalStyles";
import SearchFilter from "./search-filter/SearchFilter";
import PokemonList from "./pokemon-list/PokemonList";
import BookSearch from "./book-search/BookSearch";
import Attendance from "./attendance/Attendance";
import Bank from "./bank/Bank";
import Slider from "./slider/Slider";
import Slider2 from "./slider/Slider2";
import InfiniteSlider from "./infinite-slider/InfiniteSlider";
import PostCode from "./postcode/PostCode";
import FilterAnimation from "./filter-animation/FilterAnimation";
import DragSlider from "./drag-slider/DragSlider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./vote/Layout";
import MainPage from "./vote/pages/MainPage";
import VoteCreatePage from "./vote/pages/VoteCreatePage";
import VoteListPage from "./vote/pages/VoteListPage";
import VotingPage from "./vote/pages/VotingPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      {/* useState, useMemo */}
      {/* <SearchFilter /> */}

      {/* useReducer */}
      {/* <Attendance /> */}
      {/* <Bank /> */}

      {/* 슬라이더 */}
      {/* <Slider /> */}
      {/* <Slider2 /> */}
      {/* <InfiniteSlider /> */}

      {/* 페이지네이션 */}
      {/* <PokemonList /> */}

      {/* 무한스크롤 */}
      {/* <BookSearch /> */}

      {/* 필터 애니메이션 */}
      {/* <FilterAnimation /> */}

      {/* 드래그 슬라이더 */}
      {/* <DragSlider /> */}

      {/* 투표 */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/create" element={<VoteCreatePage />} />
            <Route path="/list" element={<VoteListPage />} />
            <Route path="/:id" element={<VotingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
