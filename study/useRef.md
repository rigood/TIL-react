# useRef

📆 2022. 10. 21. 금요일

[📙 Tutorial : Learn useRef in 11 Minutes](https://youtu.be/t2ypzz6gJm0)

- 값 저장
  - state처럼 값을 저장할 수 있음
  - state는 값이 바뀌면 렌더링이 일어나지만, ref는 값이 바뀌어도 다시 렌더링되지 않음
  - ❗ 리렌더링을 일으키지 않고, 렌더링 간에 값을 유지할 때 사용

<br>

- DOM 접근
  - querySelector, getElementById처럼 html 요소에 접근할 수 있음
  - html 요소에 ref 속성을 지정하여 사용
