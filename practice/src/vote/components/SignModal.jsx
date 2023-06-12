import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import SignPad from "./SignPad";
import Button from "./Button";

function SignModal({ setIsModalOpen, selected }) {
  const resetDrawingRef = useRef();
  const [didSign, setDidSign] = useState(false);

  return (
    <>
      <Overlay onClick={() => setIsModalOpen(false)} />
      <Content>
        <Header>
          <h2>전자서명</h2>
          <CloseBtn onClick={() => setIsModalOpen(false)}>
            <i className="fa-solid fa-x"></i>
          </CloseBtn>
        </Header>
        <Main>
          <VoteTitle>
            <strong>{selected}</strong>에 투표합니다.
          </VoteTitle>
          <SignMsg>전자서명 후 투표를 완료해주세요.</SignMsg>
          <SignPad ref={resetDrawingRef} setDidSign={setDidSign} />
          <Buttons>
            <Button
              kind="normal"
              onClick={() => resetDrawingRef.current.resetDrawing()}
            >
              지우기
            </Button>
            <Button kind="change" active={didSign}>
              투표완료
            </Button>
          </Buttons>
        </Main>
      </Content>
    </>
  );
}

export default SignModal;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  background-color: #1e3c84;
  color: white;

  h2 {
    flex: 1;
    text-align: center;
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const CloseBtn = styled.button.attrs({ type: "button" })`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  i {
    font-size: 1.6rem;
    color: white;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  backdrop-filter: blur(2px);
`;

const slideIn = keyframes`
    from {
        /* opacity: 0; */
        transform:  translateY(100%);
    }
    to {
        /* opacity: 1; */
        transform: translateY(0%);
    }
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  max-width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  z-index: 9999;
  animation: ${slideIn};
  animation-duration: 0.3s;
  overflow: hidden;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

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
