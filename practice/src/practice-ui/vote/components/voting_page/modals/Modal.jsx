import styled, { keyframes } from "styled-components";

function Modal({ setIsModalOpen, title, children }) {
  return (
    <>
      <Overlay onClick={() => setIsModalOpen(false)} />
      <Wrapper>
        <Header>
          <h2>{title}</h2>
          <CloseBtn onClick={() => setIsModalOpen(false)}>
            <i className="fa-solid fa-x"></i>
          </CloseBtn>
        </Header>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

export default Modal;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  background-color: var(--primary);
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

const Wrapper = styled.div`
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

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
