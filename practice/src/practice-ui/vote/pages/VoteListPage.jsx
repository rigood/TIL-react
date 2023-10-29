import { useState } from "react";
import styled from "styled-components";
import initialVoteList from "../data/voteListData";
import PageHeader from "../components/commons/PageHeader";
import ToggleSwitch from "../components/vote_list_page/ToggleSwitch";
import Main from "../components/commons/Main";
import VoteItem from "../components/vote_list_page/VoteItem";
import { MY_ID } from "../constants";
import { getLocalStorage, setLocalStorage } from "../utils/utils";

function VoteListPage() {
  const [isFiltered, setIsFiltered] = useState(false);

  const voteList = getLocalStorage() || initialVoteList;

  if (!voteList) {
    setLocalStorage(initialVoteList);
  }

  const getVoteStatus = (vote) => {
    if (Date.now() < vote.startDate) {
      return "예정";
    } else if (Date.now() < vote.endDate) {
      return "진행중";
    } else {
      return "종료";
    }
  };

  const getIsVoteDone = (vote) => {
    return vote.votedUserIds.includes(MY_ID);
  };

  const filteredVotes = isFiltered
    ? voteList.filter(
        (vote) => getVoteStatus(vote) === "진행중" && !getIsVoteDone(vote)
      )
    : voteList;

  const statusOrder = ["진행중", "예정", "종료"];

  const sortByStatusOrder = (a, b) => {
    return (
      statusOrder.indexOf(getVoteStatus(a)) -
      statusOrder.indexOf(getVoteStatus(b))
    );
  };

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
          {filteredVotes.sort(sortByStatusOrder).map((vote) => (
            <VoteItem
              key={vote.id}
              vote={vote}
              voteStatus={getVoteStatus(vote)}
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
