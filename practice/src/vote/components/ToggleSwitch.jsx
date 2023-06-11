import styled from "styled-components";

function ToggleSwitch({ setIsToggled }) {
  return (
    <Wrapper>
      <input
        type="checkbox"
        name=""
        onChange={() => setIsToggled((prev) => !prev)}
      />
    </Wrapper>
  );
}

export default ToggleSwitch;

const Wrapper = styled.div`
  input {
    width: 40px;
    height: 20px;
    margin: 0;
    display: block;
    appearance: none;
    outline: none;
    border-radius: 10px;
    background-color: #c6c6c6;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    cursor: pointer;
    position: relative;
  }

  input:checked {
    background-color: #1e3c84;
  }

  input:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    transition: 0.5s;
  }

  input:checked:before {
    left: 20px;
  }
`;
