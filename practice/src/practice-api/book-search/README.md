# Book Search

📆 2022. 10. 20. 목요일

[📙 Tutorial : Infinite Scrolling With React](https://youtu.be/NZKUirTtxcg)

<br>

- 주요 기능
  - 검색어를 입력하면 실시간 검색을 통해 책 목록을 표시합니다.
  - 무한 스크롤을 구현하여 페이지 하단에 도달하면 자동으로 다음 책 목록을 불러옵니다.

<br>

- 구현 방법

  - useBookSearch 훅을 통해 데이터를 요청하고, BookSearch 컴포넌트에서 데이터를 출력합니다.
  - axios를 이용해 `Open Library API`로부터 데이터를 받아옵니다.
  - axios에 params 옵션을 추가하여 `검색어와 페이지 번호에 따라 데이터를 요청`합니다.
  - axios의 cancelToken을 이용하여 연속적으로 검색어를 입력했을 때, 이전 요청을 취소하고 가장 마지막에 입력한 검색어로 검색을 진행합니다.
  - Set 객체를 사용하여 `중복된 데이터를 제거`합니다.
  - `Intersection Observer API`를 통해 무한 스크롤을 구현합니다.

<br>

- InterSection Observer API

  - 관찰중인 요소가 뷰포트와 교차하는지를 감지하는 API 입니다.

<br>

- useCallback
  ```javascript
  const memoizedCallback = useCallback(함수, 의존성 배열);
  ```
  - 함수를 메모이제이션(memoization) 하는 리액트 훅입니다.
  - 의존성 배열 내 값이 변경되기 전까지는 기존 함수를 반환해주므로, 새로 렌더링 되더라도 기존 함수를 그대로 재사용할 수 있습니다.
