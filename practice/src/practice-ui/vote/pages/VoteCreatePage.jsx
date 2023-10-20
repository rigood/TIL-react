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
import { getLocalStorage, setLocalStorage } from "../utils/utils";

function VoteCreatePage() {
  const [voteTitle, setVoteTitle] = useState("");
  const [voteDesc, setVoteDesc] = useState("");
  const [voteOptions, setVoteOptions] = useState(["", ""]);
  const [voteStartDate, setVoteStartDate] = useState("");
  const [voteEndDate, setVoteEndDate] = useState("");

  const handleVoteTitle = (e) => {
    setVoteTitle(e.target.value);
  };

  const handleVoteDesc = (e) => {
    setVoteDesc(e.target.value);
  };

  const handleVoteOption = (e, index) => {
    const voteOptionList = [...voteOptions];
    voteOptionList[index] = e.target.value;

    setVoteOptions(voteOptionList);
  };

  const addVoteOption = () => {
    const newVoteOptionList = [...voteOptions, ""];
    setVoteOptions(newVoteOptionList);
  };

  const deleteVoteOption = (index) => {
    if (voteOptions.length < 3) {
      return alert("투표 항목은 최소 2개 이상이어야 합니다.");
    }

    const newVoteOptionList = voteOptions.filter(
      (_, voteOptionIndex) => voteOptionIndex !== index
    );

    setVoteOptions(newVoteOptionList);
  };

  const handleVoteStartDate = (e) => {
    if (new Date(e.target.value) < new Date()) {
      return alert("투표 시작일은 현재 시각보다 이전일 수 없습니다.");
    }

    if (voteEndDate !== "" && e.target.value > voteEndDate) {
      return alert("투표 시작일은 투표 종료일 이전이어야 합니다.");
    }

    setVoteStartDate(e.target.value);
  };

  const handleVoteEndDate = (e) => {
    if (voteStartDate !== "" && e.target.value < voteStartDate) {
      return alert("투표 종료일은 투표 시작일 이후여야 합니다.");
    }
    setVoteEndDate(e.target.value);
  };

  const navigate = useNavigate();
  const createVote = (e) => {
    e.preventDefault();

    const voteList = getLocalStorage();

    const newVote = {
      id: voteList.length + 1,
      title: voteTitle,
      desc: voteDesc,
      options: voteOptions,
      startDate: new Date(voteStartDate).getTime(),
      endDate: new Date(voteEndDate).getTime(),
      votedUserIds: [],
    };

    voteList.push(newVote);
    setLocalStorage(voteList);

    navigate("/list");
  };

  return (
    <>
      <PageHeader pageTitle="투표 개설" destination="/" />
      <Main>
        <VoteCreateForm onSubmit={createVote}>
          <VoteTitle
            type="text"
            required
            placeholder="투표 제목을 입력해주세요."
            value={voteTitle}
            onChange={handleVoteTitle}
          />
          <VoteDesc
            type="text"
            required
            placeholder="투표 설명을 입력해주세요."
            value={voteDesc}
            onChange={handleVoteDesc}
          />
          <VoteOptions>
            {voteOptions.map((voteOption, index) => (
              <VoteOptionWrapper key={index}>
                <VoteOptionButton onClick={() => deleteVoteOption(index)}>
                  <FontAwesomeIcon icon={faSquareMinus} />
                </VoteOptionButton>
                <VoteOption
                  type="text"
                  required
                  placeholder="항목 입력"
                  value={voteOption}
                  onChange={(e) => handleVoteOption(e, index)}
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
          <VoteDateSection>
            <VoteDateWrapper>
              <span>시작일</span>
              <VoteDate
                type="datetime-local"
                required
                value={voteStartDate}
                onChange={handleVoteStartDate}
              />
            </VoteDateWrapper>
            <VoteDateWrapper>
              <span>종료일</span>
              <VoteDate
                type="datetime-local"
                required
                value={voteEndDate}
                onChange={handleVoteEndDate}
              />
            </VoteDateWrapper>
          </VoteDateSection>
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

const VoteTitle = styled.input`
  width: 100%;
  margin-bottom: 20px;
  font-size: 2.4rem;

  &::placeholder {
    opacity: 0.8;
  }
`;

const VoteDesc = styled.textarea`
  width: 100%;
  margin-bottom: 20px;
  padding: 1rem;
  border-radius: 0.5rem;
  outline: 1px solid #eee;
  font-size: 1.8rem;

  &::placeholder {
    opacity: 0.8;
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

const VoteOption = styled.input`
  flex: 1;
  padding: 2rem;
  background-color: var(--secondary);
  border-radius: 0.5rem;
  position: relative;
`;

const VoteDateSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  margin: 4rem 0 2rem;
`;

const VoteDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VoteDate = styled.input``;
