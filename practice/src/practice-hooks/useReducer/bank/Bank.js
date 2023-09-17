import { useReducer, useState } from "react";
import styled from "styled-components";

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

function Bank() {
  const [amount, setAmount] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <Wrapper>
      <Title>useReducer 은행</Title>
      <Label>잔고: {money}원</Label>
      <Form>
        <Input
          type="number"
          step="1000"
          min={0}
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <Button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.deposit, payload: amount });
          }}
        >
          예금
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.withdraw, payload: amount });
          }}
        >
          출금
        </Button>
      </Form>
    </Wrapper>
  );
}

export default Bank;

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
`;

const Button = styled.button.attrs({ type: "button" })`
  padding: 5px 10px;
  background-color: gray;
  color: white;
  word-break: keep-all;
`;
