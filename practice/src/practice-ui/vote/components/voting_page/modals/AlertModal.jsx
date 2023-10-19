import styled from "styled-components";

const AlertModal = () => {
  return (
    <>
      <Message>이미 참여하거나 종료된 투표입니다.</Message>
    </>
  );
};

export default AlertModal;

const Message = styled.div`
  font-size: 1.8rem;
`;
