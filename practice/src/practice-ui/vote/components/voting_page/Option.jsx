import styled from "styled-components";

function Option({ option, index, isSelected, onClick }) {
  return (
    <Wrapper isSelected={isSelected} onClick={onClick}>
      <input type="radio" name="title" value={index} />
      <span>{option}</span>
    </Wrapper>
  );
}

export default Option;

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: var(--secondary);
  border-radius: 0.5rem;
  cursor: pointer;

  input[type="radio"] {
    accent-color: var(--primary);
    width: 1.6rem;
    height: 1.6rem;
    margin: 0;
    margin-right: 10px;
  }

  span {
    font-size: 1.8rem;
  }

  color: ${(props) => props.isSelected && "var(--primary)"};
  font-weight: ${(props) => props.isSelected && "bold"};
`;
