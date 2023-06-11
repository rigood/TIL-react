import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function VoteItem({ vote, myId }) {
  const { id, title, startDate, endDate, votedUserIds } = vote;

  const flag = votedUserIds.includes(myId) ? "투표완료" : "미투표";
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/${id}`, { state: { vote } })}>
      <Flag flag={flag}>{flag}</Flag>
      <Title>{title}</Title>
      <Duration>2023년 06월 11일 ~ 2023년 06월 13일</Duration>
      <VotingRate>투표율 100%</VotingRate>
    </Wrapper>
  );
}

export default VoteItem;

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  background-color: #fdf5e6;
  border-radius: 0.5rem;
  padding: min(5%, 20px);
  cursor: pointer;
`;

const Flag = styled.div`
  width: fit-content;
  padding: 0.4rem 0.8rem;
  font-size: 1.4rem;
  border-radius: 8px;
  background-color: ${(props) =>
    props.flag === "투표완료" ? "tan" : "#1e3c84"};
  color: white;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Duration = styled.div`
  font-size: 1.6rem;
`;

const VotingRate = styled.div`
  font-size: 1.4rem;
`;
