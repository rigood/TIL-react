import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/logo.png";

function MainPage() {
  return (
    <Wrapper>
      <SubTitle>간편한 온라인 투표</SubTitle>
      <Title>Pick me</Title>
      <Logo src={LogoImg} alt="로고" />
      <SLink to="/list">투표 참여하기</SLink>
      <SLink to="/create">투표 개설하기</SLink>
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-family: "Pretendard-ExtraBold";
  font-size: 4.8rem;
  font-weight: bold;
`;

const Logo = styled.img`
  display: block;
  width: 400px;
  margin: 50px 0 30px;
`;

const SLink = styled(Link)`
  width: 90%;
  max-width: 300px;
  padding: 1.5rem 0;
  background-color: var(--mainPagePrimary);
  border-radius: 10px;
  font-size: 2rem;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;
