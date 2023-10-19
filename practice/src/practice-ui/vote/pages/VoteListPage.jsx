import { useState } from "react";
import styled from "styled-components";
import initialVoteList from "../data/voteListData";
import PageHeader from "../components/commons/PageHeader";
import ToggleSwitch from "../components/vote_list_page/ToggleSwitch";
import Main from "../components/commons/Main";
import VoteItem from "../components/vote_list_page/VoteItem";
import { LOCALSTORAGE_KEY, MY_ID } from "../constants";

function VoteListPage() {
  const [isFiltered, setIsFiltered] = useState(false);

  const savedVoteList = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!savedVoteList) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(initialVoteList));
  }

  const voteList = JSON.parse(savedVoteList);

  const getIsVoteOpen = (vote) => {
    return Date.now() >= vote.startDate && Date.now() < vote.endDate;
  };

  const getIsVoteDone = (vote) => {
    return vote.votedUserIds.includes(MY_ID);
  };

  const filteredVotes = isFiltered
    ? voteList.filter((vote) => getIsVoteOpen(vote) && !getIsVoteDone(vote))
    : voteList;

  return (
    <>
      <PageHeader pageTitle="투표 목록" destination="/">
        <Toggle>
          <span>참여 가능한 투표</span>
          <ToggleSwitch setIsToggled={setIsFiltered} />
        </Toggle>
      </PageHeader>
      <Main>
        <VoteList>
          {filteredVotes.map((vote) => (
            <VoteItem
              key={vote.id}
              vote={vote}
              isOpen={getIsVoteOpen(vote)}
              isDone={getIsVoteDone(vote)}
            />
          ))}
          {filteredVotes.length === 0 && (
            <NoVotesMessage>참여 가능한 투표가 없습니다.</NoVotesMessage>
          )}
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

const NoVotesMessage = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.8rem;
`;
