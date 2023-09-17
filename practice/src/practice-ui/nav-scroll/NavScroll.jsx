import styled from "styled-components";
import { Link } from "react-scroll";

const NavScroll = () => {
  return (
    <>
      <NavBar>
        <SLink to="1" spy={true} smooth={true}>
          첫번째
        </SLink>
        <SLink to="2" spy={true} smooth={true}>
          두번째
        </SLink>
        <SLink to="3" spy={true} smooth={true}>
          세번째
        </SLink>
        <SLink to="4" spy={true} smooth={true}>
          네번째
        </SLink>
      </NavBar>
      <SectionWrapper>
        {[1, 2, 3, 4].map((num) => (
          <Section key={num} id={num}>
            {num}
          </Section>
        ))}
      </SectionWrapper>
    </>
  );
};

export default NavScroll;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: calc(100% - 300px);
  height: 80px;
  padding: 20px;
  background-color: #ffe3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const SectionWrapper = styled.div`
  padding-top: 80px;
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const SLink = styled(Link)`
  cursor: pointer;
`;
