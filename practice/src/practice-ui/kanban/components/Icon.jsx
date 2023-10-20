import styled, { css } from "styled-components";

function Icon({ color, icon, isHover, onClick }) {
  return (
    <Wrapper color={color} onClick={onClick} isHover={isHover}>
      <i className={icon}></i>
    </Wrapper>
  );
}

export default Icon;

const Wrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  i {
    font-size: 1.4rem;
    color: ${(props) => props.color};
    transition: all 0.3s ease;
  }

  ${(props) =>
    props.isHover &&
    css`
      &:hover {
        background-color: ${props.color};
        i {
          color: white;
        }
      }
    `}
`;
