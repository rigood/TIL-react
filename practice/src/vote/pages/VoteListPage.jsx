import { useState } from "react";
import styled from "styled-components";
import voteList from "../data/voteListData.json";
import PageHeader from "../components/PageHeader";
import ToggleSwitch from "../components/ToggleSwitch";
import Main from "../components/Main";
import VoteItem from "../components/VoteItem";

function VoteListPage() {
  const [isToggled, setIsToggled] = useState(false);

  const myId = "1";

  const filteredVotes = isToggled
    ? voteList.filter(
        ({ isOpen, votedUserIds }) => isOpen && !votedUserIds.includes(myId)
      )
    : voteList;

  return (
    <>
      <PageHeader pageTitle="투표 목록">
        <Toggle>
          <span>참여 가능한 투표</span>
          <ToggleSwitch setIsToggled={setIsToggled} />
        </Toggle>
      </PageHeader>
      <Main>
        <VoteList>
          {filteredVotes.map((vote) => (
            <VoteItem key={vote.id} vote={vote} myId={myId} />
          ))}
        </VoteList>
      </Main>
    </>
  );
}

export default VoteListPage;

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
`;
