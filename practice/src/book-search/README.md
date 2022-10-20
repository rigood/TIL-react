# Book Search

📆 2022. 10. 20. 목요일

[📙 Tutorial : Infinite Scrolling With React](https://youtu.be/NZKUirTtxcg)

<br>

- 주요 기능
  - 검색어를 입력하면 책 목록이 표시됩니다.
  - 무한 스크롤을 구현하여 페이지 하단에 도달하면 자동으로 다음 페이지를 불러옵니다.

<br>

- 구현 방법
  - useBookSearch에서 데이터를 요청하고, BookSearch 컴포넌트에서 데이터를 출력합니다.
  - axios를 이용해 Open Library API로부터 책 정보를 받아옵니다.
  - axios에 params 옵션을 추가하여 검색어와 페이지 번호에 따라 데이터를 요청합니다.
  - Set 객체를 사용하여 중복 데이터를 제거합니다.
  - <b>Intersection Observer API</b>를 통해 무한 스크롤을 구현합니다.
