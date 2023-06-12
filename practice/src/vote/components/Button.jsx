import styled, { css } from "styled-components";

function Button({ children, kind, active, onClick }) {
  return (
    <Wrapper kind={kind} active={active} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button.attrs({ type: "button" })`
  width: 100%;
  padding: 2rem;
  background-color: #fdf5e6;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  line-height: 1.6rem;
  transition: all 0.5s ease;

  ${(props) =>
    props.kind === "change" &&
    css`
      background-color: #f1f3f5;
    `}

  ${(props) =>
    props.active &&
    css`
      background-color: var(--primary);
      color: white;
    `}
`;
