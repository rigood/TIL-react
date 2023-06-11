import { useState } from "react";
import styled from "styled-components";
import ToggleSwitch from "../components/ToggleSwitch";
import VoteItem from "../components/VoteItem";
import voteList from "../data/voteListData.json";

function MainPage() {
  const [isToggled, setIsToggled] = useState(false);

  const myId = "1";

  const filteredVotes = isToggled
    ? voteList.filter(
        ({ isOpen, votedUserIds }) => isOpen && !votedUserIds.includes(myId)
      )
    : voteList;

  return (
    <>
      <Header>
        <Title>투표목록</Title>
        <Toggle>
          <span>참여 가능한 투표</span>
          <ToggleSwitch setIsToggled={setIsToggled} />
        </Toggle>
      </Header>
      <VoteList>
        {filteredVotes.map((vote) => (
          <VoteItem key={vote.id} vote={vote} myId={myId} />
        ))}
      </VoteList>
    </>
  );
}

export default MainPage;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: max(5%, 10px) max(5%, 20px);
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;

  span {
    margin-right: 1rem;
  }
`;

const VoteList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0 max(5%, 20px);
`;
