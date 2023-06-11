import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import SignModal from "../components/SignModal";
import Option from "../components/Option";

function VotePage() {
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
    <Wrapper>
      <Header>
        <Link to={".."}>
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
        <h2>투표하기</h2>
      </Header>
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
    </Wrapper>
  );
}

export default VotePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: max(5%, 10px) max(5%, 20px);
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  a {
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 2rem;
    }
  }

  h2 {
    flex: 1;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.4rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 0 20px;
`;

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
      background-color: #1e3c84;
      color: white;
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;
