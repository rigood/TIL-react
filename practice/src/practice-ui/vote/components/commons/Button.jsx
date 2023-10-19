import styled, { css } from "styled-components";

function Button({
  type = "button",
  kind,
  disabled,
  onClick,
  margin,
  fontSize = "1.6rem",
  children,
}) {
  return (
    <Wrapper
      type={type}
      kind={kind}
      disabled={disabled}
      onClick={onClick}
      margin={margin}
      fontSize={fontSize}
    >
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button`
  width: 100%;
  padding: 2rem;
  background-color: var(--secondary);
  border-radius: 0.5rem;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.fontSize};
  transition: all 0.5s ease;

  ${(props) =>
    props.kind === "variable" &&
    css`
      background-color: var(--white);
    `}

  ${(props) =>
    props.kind === "variable" &&
    !props.disabled &&
    css`
      background-color: var(--primary);
      color: white;
    `}

   &:disabled {
    cursor: not-allowed;
  }
`;
