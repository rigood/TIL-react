import { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SignPad from "../SignPad";
import Button from "../../commons/Button";
import { LOCALSTORAGE_KEY, MY_ID } from "../../../constants";

function SignModal({ selectedCandidate, setIsModalOpen, voteId }) {
  const [didSign, setDidSign] = useState(false);

  const resetDrawingRef = useRef();

  const navigate = useNavigate();

  const onVoteEnd = () => {
    // 투표완료한 id 목록에 내 아이디 추가하고 로컬스토리지에 저장
    const savedVoteList = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    savedVoteList.map((vote) => {
      if (vote.id === Number(voteId)) {
        vote.votedUserIds.push(MY_ID);
        return vote;
      } else {
        return vote;
      }
    });

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedVoteList));

    setIsModalOpen(false);
    navigate("/list");
  };

  return (
    <>
      <VoteTitle>
        <strong>{selectedCandidate}</strong>에 투표합니다.
      </VoteTitle>
      <SignMsg>전자서명 후 투표를 완료해주세요.</SignMsg>
      <SignPad ref={resetDrawingRef} setDidSign={setDidSign} />
      <Buttons>
        <Button
          kind="fixed"
          onClick={() => resetDrawingRef.current.resetDrawing()}
        >
          지우기
        </Button>
        <Button kind="variable" disabled={!didSign} onClick={onVoteEnd}>
          투표완료
        </Button>
      </Buttons>
    </>
  );
}

export default SignModal;

const VoteTitle = styled.h3`
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 10px;
  line-height: 1.2;

  strong {
    font-weight: bold;
    color: var(--primary);
  }
`;

const SignMsg = styled.div`
  font-size: 1.6rem;
  color: gray;
  margin: 10px 0 20px;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
`;
