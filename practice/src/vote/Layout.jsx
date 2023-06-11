import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: white;
`;
