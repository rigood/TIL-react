import styled from "styled-components";

function Main({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Main;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 max(5%, 20px) 40px;
`;
