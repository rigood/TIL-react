# Pokemon List

📆 2022. 10. 20. 목요일

[📙 Tutorial : Build A Pokémon Application With React](https://youtu.be/o3ZUc7zH8BE)

<br>

- 주요 기능
  - 1페이지 당 20마리의 포켓몬을 보여줍니다.
  - 이전 페이지, 다음 페이지로 이동할 수 있습니다.

<br>

- 구현 방법
  - axios를 이용해 Poke API로부터 포켓몬 이름을 가져옵니다.
  - axios의 CancelToken을 이용해 중복 요청 발생 시 이전 요청을 취소합니다.
  - useEffect를 이용하여 페이지 이동 시 API를 호출합니다.
