import { useState } from "react";
import styled, { css } from "styled-components";
import data from "./FAQ.json";

function Accordion() {
  const [selectedFAQIndex, setSelectedFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (selectedFAQIndex === index) {
      return setSelectedFAQIndex(null);
    }

    setSelectedFAQIndex(index);
  };

  return (
    <Wrapper>
      <Title>자주하는 질문</Title>
      <FAQ>
        {data.map((item, index) => (
          <FAQItem key={item.id}>
            <Header
              onClick={() => toggleFAQ(index)}
              active={selectedFAQIndex === index}
            >
              <Question>Q. {item.question}</Question>
              <FoldBtn active={selectedFAQIndex === index}>
                <i className="fa-solid fa-chevron-down" />
              </FoldBtn>
            </Header>
            <Content active={selectedFAQIndex === index}>
              <Answer>A. {item.answer}</Answer>
            </Content>
          </FAQItem>
        ))}
      </FAQ>
    </Wrapper>
  );
}

export default Accordion;

const Wrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Pretendard-ExtraBold";
  font-size: 4rem;
  margin-bottom: 6rem;
`;

const FAQ = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const FAQItem = styled.li`
  width: 100%;
`;

const Header = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.4rem;
  border-bottom: ${({ active }) => !active && "1px solid #e9ecef"};
  color: ${({ active }) => active && "crimson"};
`;

const Question = styled.h5`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.4rem;
  line-height: 2.4rem;
`;

const FoldBtn = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? "crimson" : "#999")};

  i {
    font-size: 1.8rem;
    transition: all 0.3s ease;
  }

  ${({ active }) =>
    active &&
    css`
      i {
        transform: rotate(180deg);
      }
    `}
`;

const Content = styled.div`
  height: ${({ active }) => (active ? "auto" : 0)};
  overflow: hidden;
`;

const Answer = styled.p`
  padding: 10px 0;
  padding-bottom: 2.4rem;
  color: #555;
  line-height: 2;
  white-space: pre;
`;
