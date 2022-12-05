# Slider

📆 2022. 12. 5. 월요일

[📙 Tutorial : Build a Slider with React.js](https://youtu.be/og3wCO98HkQ)

- CSS 설정

  - 슬라이드 컨테이너 position: relative
  - 슬라이드 position: absolute, opacity: 0, active 클래스: opacity: 1

<br>

- 화면에 슬라이드 나타내기

  - `useState`를 이용하여 `slideIndex` 상태값 저장
  - `map` 메서드를 이용하여 슬라이드를 배치, map 메서드의 두번째 인자인 `index` 사용
  - slideIndex와 배열 내의 index가 일치하는 경우 `active 클래스` 추가

<br>

- 버튼으로 슬라이드 움직이기
  - 이전 버튼 클릭 시 slideIndex를 1씩 감소
    - slideIndex가 1인 경우(첫번째 슬라이드) 마지막 슬라이드로 이동한다(slideIndex=slide 배열 개수)
  - 다음 버튼 클릭 시 slideIndex를 1씩 증가
    - slideIndex가 slide 배열 개수와 같은 경우(마지막 슬라이드) 첫번째 슬라이드로 이동한다(slideIndex=1)
