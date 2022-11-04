# useReducer

📆 2022. 11. 4. 금요일

[📙 Tutorial : React Hooks에 취한다 - useReducer 확실히 정리해드려요 | 리액트 훅스 시리즈](https://youtu.be/tdORpiegLg0)

<br>

- useReducer
  - useState 외에 state를 관리할 수 있는 또 다른 리액트 훅
  - 여러개의 하위값을 포함하는 복잡한 state를 다뤄야 할 때 사용하면 편리함
  - `reducer`, `dispatch`, `action` 라는 3가지 요소로 이루어져 있음

<br>

- 사용 방법

  ```javascript
  import { useReducer } from "react";

  const reducer = (state, action) => {
      switch(action.type){
          case 'add':
              return state + action.payload;
          case 'minus':
              return state - action.payload;
          default:
              return state;
      }
  };

   // const [state, dispatch] = useReducer(reducer, initialState);
  const [number, dispatch] = useReducer(reducer, 0);

  <button onClick={ () => {
      dispatch({ type: 'add', payload: 1 });
  }}>
  증가(+1)
  </button>

  <button onClick={ () => {
      dispatch({ type: 'minus', payload: -1 });
  }}>
  감소(-1)
  </button>
  ```
