import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import PageHeader from "../components/PageHeader";
import Main from "../components/Main";
import Option from "../components/Option";
import SignModal from "../components/SignModal";

function VotingPage() {
  const {
    id,
    title,
    desc,
    options,
    startDate,
    endDate,
    votedUserIds,
    shouldSign,
  } = useLocation().state.vote;

  const [selected, setSelected] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) return;
    setIsModalOpen(true);
  };

  return (
    <>
      <PageHeader pageTitle="투표하기" />
      <Main>
        <VoteTitle>{title}</VoteTitle>
        <VoteDesc>{desc}</VoteDesc>
        <VoteOptions onSubmit={handleSubmit}>
          {options.map((option, index) => (
            <Option
              key={option}
              option={option}
              index={index}
              onClick={() => setSelected(option)}
              isSelected={option === selected}
            />
          ))}
          {
            <VoteBtn active={Boolean(selected)} disabled={!selected}>
              투표하기
            </VoteBtn>
          }
        </VoteOptions>
      </Main>
      {isModalOpen && (
        <SignModal setIsModalOpen={setIsModalOpen} selected={selected} />
      )}
    </>
  );
}

export default VotingPage;

const VoteTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const VoteDesc = styled.p`
  font-size: 1.6rem;
  color: gray;
  line-height: 1.2;
  word-break: keep-all;
  margin-bottom: 30px;
`;

const VoteOptions = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const VoteBtn = styled.button.attrs({ type: "submit" })`
  width: 100%;
  padding: 2rem;
  margin: 20px 0;
  background-color: #f1f3f5;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.8rem;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--primary);
      color: white;
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;
