# 📂 Today I Learned (React)

#### API 활용

- [영화 검색](practice/src/practice-api/movie-search/MovieSearch.js) : `axios`, `useInfiniteQuery`, `Intersection Observer API`, `무한스크롤`
- [도서 검색](practice/src/practice-api/book-search/BookSearch.js) : `axios`, `useState`, `Intersection Observer API`, `무한스크롤`
- [포켓몬스터 목록](practice/src/practice-api/pokemon/Pokemons.js) : `axios`, `useState`, `페이지네이션`

#### UI 연습

- 슬라이더

  - [기본 슬라이더](practice/src/practice-ui/slider/Slider.js) : position: absolute, z-index, opacity
  - [기본 슬라이더2](practice/src/practice-ui/slider/Slider2.js) : translateX
  - [무한 슬라이더](practice/src/practice-ui/slider/InfiniteSlider.jsx) : translateX, setTimeout
  - [드래그 가능한 슬라이더](practice/src/practice-ui/slider/DragSlider.jsx) : useRef, scrollWidth, offsetWidth

- [필터링 애니메이션](practice/src/practice-ui/filter-animation/FilterAnimation.jsx) : framer-motion 활용, movieDB API fetch

- [패럴랙스](practice/src/practice-ui/parallax/Parallax.jsx) : scrollY 값을 감지하여 backgroundPositionY, translateX 조절
- [아코디언 메뉴](practice/src/practice-ui/accordion/Accordion.jsx)
- [해쉬태그](practice/src/practice-ui/hashtag/HashTag.jsx)

#### Hooks 연습

- useRef
  - [개념](study/useRef.md)
- useMemo
  - [개념](study/useMemo.md)
  - [예제 - Search Filter](practice/src/practice-hooks/useMemo/search-filter/README.md)
- useReducer
  - [예제 - 출석부](practice/src/practice-hooks/useReducer/attendance/Attendance.js)
  - [예제 - 은행 입출금](practice/src/practice-hooks/useReducer/bank/Bank.js)
- useContext
  - [예제 - shopping cart](study/shopping-cart.md)
- 기타
  - [react-hook-mistakes](study/react-hook-mistakes.md)

#### ETC

- [웹개발 팁](study/shorts.md)
- [shopping cart 예제](study/shopping-cart.md) : `TypeScript`, `bootstrap`, `useContext`, `useLocalStorage`
