import { Link } from "react-router-dom";
import styled from "styled-components";

function PageHeader({ pageTitle, destination, children }) {
  return (
    <Header>
      <SLink to={destination}>
        <i className="fa-solid fa-chevron-left" />
      </SLink>
      <Title>{pageTitle}</Title>
      {children}
    </Header>
  );
}

export default PageHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: max(5%, 10px);
`;

const SLink = styled(Link)`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  i {
    font-size: 2rem;
  }
`;

const Title = styled.h2`
  flex: 1;
  font-size: 2.4rem;
  font-weight: bold;
`;
