# React Hook Mistakes

📆 2022. 10. 20. 목요일

[📙 Tutorial : Top 6 React Hook Mistakes Beginners Make](https://youtu.be/GGo3MVBFr1A)

<br>

- <b> 1. useState는 꼭 필요한 상황에서만 쓰자 </b>

  - (기존) input에 onChange 이벤트를 달아서 input 값이 변할 때마다 상태를 변경했는데, 입력할 때마다 렌더링 되므로 비효율적이다.
  - (개선) input 값을 useRef를 통해 가져온다.

<br>

- <b> 2. useState의 setter함수는 함수형으로 사용하자</b>

  ```javascript
  const [count, setCount] = useState(0);

  function adjustCount(amount) {
    setCount(count + amount);
    setCount(count + amount);
    // 잘못된 코드
    // setCount 내에 count는 실제 값이 아닌 초기 count 값
    // 0 + 1
    // 0 + 1

    setCount((currentCount) => currentCount + amount);
    setCount((currentCount) => currentCount + amount);
    // 올바른 코드
    // setCount 내에 있는 currentCount는 실제 값을 반영
    // 0 + 1
    // 1 + 1
  }

  return (
    <>
      <button onClick={() => adjustCount(+1)}>minus</button>
      <span>{count}</span>
    </>
  );
  ```

  <br>

- <b> 3. state는 즉시 업데이트 되지 않는다.</b>

  - state는 렌더링 될 때 업데이트되므로, 변경된 state를 곧바로 확인하고 싶을 때는 useEffect를 사용해야함

  ```javascript
  useEffect(() => {
    console.log(count);
    // 업데이트된 값
  }, [count]);

  function adjustCount(amount) {
    setcount((currentCount) => currentCount + amount);
    console.log(count);
    // 업데이트된 값이 아닌 기존 값
  }
  ```

<br>

- <b> 4. useEffect도 꼭 필요한 상황에서만 쓰자</b>

<br>

- <b> 5. Referential equality mistakes</b>

  - <b>Referential equality</b>: 자바스크립트는 두 변수 안에 저장된 값이 동일해도 두 변수를 동일하다고 판단하지 않는다.
  - age, name, darkmode 라는 3개의 state가 있고, age와 name을 묶어 person이라는 객체로 정의, person이 바뀌면 useEffect가 실행되도록 설정, darkmode가 변경되면 전체 렌더링이 시작되는데 이때 person이라는 객체를 또 다시 정의함. age와 name은 바뀌지 않았기 때문에 person 객체에 저장된 값은 동일하지만 기존 person 객체와 새로 만들어진 person 객체는 완전히 동일하지 않으므로 useEffect 훅이 실행됨
    <br>
  - <b>useMemo를 통해 해결</b>: person 객체를 useMemo로 감싸고, useMemo에 dependency로 age와 name 추가
  - age와 name이 바뀔 때만 새로운 person 객체를 반환하므로 darkmode가 변경되어도 기존 person 객체는 유지되므로 useEffect 훅이 실행되지 않음

  <br>

- <b> 6. Not aborting fetch requests</b>
  - fetch 함수를 연속해서 사용할 경우 네트워크 속도에 따라 비동기적으로 처리될 수 있음
  - https://youtu.be/GGo3MVBFr1A?t=1025
