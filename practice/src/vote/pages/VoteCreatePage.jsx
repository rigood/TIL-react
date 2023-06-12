import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Main from "../components/Main";

function VoteCreatePage() {
  return (
    <>
      <PageHeader pageTitle="투표 개설" />
      <Main>
        <VoteTitleInput placeholder="투표 제목을 입력해주세요." />
      </Main>
    </>
  );
}

export default VoteCreatePage;

const VoteTitleInput = styled.input.attrs({ type: "text" })`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.6rem;

  &::placeholder {
    opacity: 0.3;
  }
`;
