import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/commons/PageHeader";
import Main from "../components/commons/Main";
import Option from "../components/voting_page/Option";
import Modal from "../components/voting_page/modals/Modal";
import AlertModal from "../components/voting_page/modals/AlertModal";
import SignModal from "../components/voting_page/modals/SignModal";
import Button from "../components/commons/Button";

function VotingPage() {
  const {
    vote: { id, title, desc, options },
    isVoteDisabled,
  } = useLocation().state;

  const [isAlertModalOpen, setIsAlertModalOpen] = useState(isVoteDisabled);

  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedCandidate) return;

    setIsSignModalOpen(true);
  };

  return (
    <>
      <PageHeader pageTitle="투표하기" destination="/list" />
      <Main>
        <VoteTitle>{title}</VoteTitle>
        <VoteDesc>{desc}</VoteDesc>
        <VoteOptions onSubmit={handleSubmit}>
          {options.map((option, index) => (
            <Option
              key={option}
              option={option}
              index={index}
              onClick={() => setSelectedCandidate(option)}
              isSelected={option === selectedCandidate}
            />
          ))}
          {
            <Button
              type="submit"
              kind="variable"
              disabled={!selectedCandidate || isVoteDisabled}
              margin="1.6rem 0"
              fontSize="1.8rem"
            >
              투표하기
            </Button>
          }
        </VoteOptions>
      </Main>
      {isAlertModalOpen && (
        <Modal setIsModalOpen={setIsAlertModalOpen} title="알림">
          <AlertModal />
        </Modal>
      )}
      {isSignModalOpen && (
        <Modal setIsModalOpen={setIsSignModalOpen} title="전자서명">
          <SignModal
            selectedCandidate={selectedCandidate}
            setIsModalOpen={setIsSignModalOpen}
            voteId={id}
          />
        </Modal>
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
  white-space: pre-wrap;
`;

const VoteOptions = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;
