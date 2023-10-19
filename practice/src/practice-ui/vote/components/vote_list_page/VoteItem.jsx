import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { calculateVotingRate, formatDate } from "../../utils/utils";

function VoteItem({ vote, isOpen, isDone }) {
  const { id, title, startDate, endDate, votedUserIds } = vote;

  const voteDone = isDone ? "투표완료" : "미투표";
  const voteOpen = isOpen ? "진행중" : "종료";

  const votingRate = calculateVotingRate(votedUserIds.length);

  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() =>
        navigate(`/${id}`, {
          state: { vote, isVoteDisabled: isDone || !isOpen },
        })
      }
    >
      <VoteDone active={!isDone}>{voteDone}</VoteDone>
      <Title>{title}</Title>
      <Row>
        <VoteOpen>({voteOpen})</VoteOpen>
        <Period>
          {formatDate(startDate)} ~ {formatDate(endDate)}
        </Period>
      </Row>
      <VotingRate>투표율 {votingRate}</VotingRate>
    </Wrapper>
  );
}

export default VoteItem;

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  background-color: var(--secondary);
  border-radius: 0.5rem;
  padding: min(5%, 20px);
  cursor: pointer;
`;

const VoteDone = styled.div`
  width: fit-content;
  padding: 0.4rem 0.8rem;
  font-size: 1.4rem;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? "var(--primary)" : "tan")};
  color: white;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Row = styled.div`
  display: flex;
  gap: 5px;
`;

const VoteOpen = styled.div`
  font-weight: bold;
`;

const Period = styled.div`
  font-size: 1.6rem;
  opacity: 0.8;
`;

const VotingRate = styled.div`
  font-size: 1.4rem;
`;
