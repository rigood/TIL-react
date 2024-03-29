# useMemo

📆 2022. 10. 21. 금요일

[📙 Tutorial : Learn useMemo In 10 Minutes](https://youtu.be/THL1OPn72vo)

```javascript
useMemo(()=>함수, 의존성 배열)
```

- state가 변하면 해당 state만 렌더링 되는게 아니라 컴포넌트 전체가 다시 렌더링 됨
- 만약 컴포넌트 내에 연산이 오래 걸리는 함수가 있다면, 해당 함수가 변경된 것이 아님에도 연산을 다시 수행해야함
- useMemo를 사용하면 해당 연산 결과값을 저장해서 재사용할 수 있고, 의존성 배열을 추가하여 배열 값이 바뀌는 경우에만 연산을 다시 수행할 수 있음
- state가 바뀌어도 연산이 오래 걸리는 함수가 실행되지 않기 때문에(useMemo로 저장해놓은 값 사용) 렌더링 속도가 훨씬 빨라짐

<br>

- 하지만 useMemo를 남발해서 사용하면 안됨 -> 렌더링 될 때마다 useMemo 함수를 실행해야 되고, 연산 결과값을 저장하기 위해 추가적으로 메모리를 사용하기 때문

- 연산이 굉장히 오래 걸리는 함수의 결과값을 저장하거나, referential equality를 유지해야 하는 경우에만 useMemo를 사용
