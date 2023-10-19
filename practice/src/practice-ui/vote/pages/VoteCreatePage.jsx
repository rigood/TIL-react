import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import PageHeader from "../components/commons/PageHeader";
import Main from "../components/commons/Main";
import Button from "../components/commons/Button";

function VoteCreatePage() {
  const [voteOptions, setVoteOptions] = useState([1, 2]);

  const addVoteOption = () => {
    setVoteOptions((prev) => [...prev, prev[voteOptions.length - 1] + 1]);
  };

  const deleteVoteOption = (num) => {
    if (voteOptions.length < 3) {
      return alert("투표 항목은 최소 2개 이상이어야 합니다.");
    }

    setVoteOptions((prev) => prev.filter((voteOption) => voteOption !== num));
  };

  const navigate = useNavigate();
  const createVote = (e) => {
    e.preventDefault();

    navigate("/list");
  };

  return (
    <>
      <PageHeader pageTitle="투표 개설" destination="/" />
      <Main>
        <VoteCreateForm onSubmit={createVote}>
          <VoteTitleInput placeholder="투표 제목을 입력해주세요." />
          <VoteOptions>
            {voteOptions.map((num) => (
              <VoteOptionWrapper key={num}>
                <VoteOptionButton onClick={() => deleteVoteOption(num)}>
                  <FontAwesomeIcon icon={faSquareMinus} />
                </VoteOptionButton>
                <VoteOption
                  name={num}
                  placeholder={`항목 입력 ${num}`}
                  required
                />
              </VoteOptionWrapper>
            ))}
            {voteOptions.length < 10 && (
              <VoteOptionWrapper onClick={addVoteOption}>
                <VoteOptionButton>
                  <FontAwesomeIcon icon={faSquarePlus} />
                </VoteOptionButton>
                <VoteOption placeholder={`항목 추가`} readOnly />
              </VoteOptionWrapper>
            )}
          </VoteOptions>
          <Button
            type="submit"
            kind="variable"
            disabled={voteOptions.length < 2}
            margin="3rem 0"
          >
            투표 개설
          </Button>
        </VoteCreateForm>
      </Main>
    </>
  );
}

export default VoteCreatePage;

const VoteCreateForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const VoteTitleInput = styled.input.attrs({ type: "text" })`
  width: 100%;

  font-family: "Pretendard-ExtraBold";
  font-size: 2.4rem;
  margin-bottom: 20px;

  &::placeholder {
    opacity: 0.3;
  }
`;

const VoteOptions = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const VoteOptionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const VoteOptionButton = styled.button.attrs({ type: "button" })`
  padding: 1rem 1.5rem;
`;

const VoteOption = styled.input.attrs({ type: "text" })`
  flex: 1;
  padding: 2rem;
  background-color: var(--secondary);
  border-radius: 0.5rem;
  position: relative;
`;

const VoteOptionAddButton = styled.button.attrs({ type: "button" })`
  background-color: var(--primary);
  color: white;
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin: 3rem auto;
`;
