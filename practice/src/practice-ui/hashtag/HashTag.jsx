import { useState, useRef } from "react";
import styled from "styled-components";

// replace(/\s+/g, " ")
// 연속된 공백문자를 하나의 공백문자로 변환
// \s -> any whitespace character
// + -> one or more

function HashTag() {
  const inputRef = useRef(null);
  const [hashTags, setHashTags] = useState([]);

  const addHashTag = (e) => {
    if (e.key === "Enter") {
      let tag = e.target.value.replace(/\s+/g, " ");

      if (tag === "") return;

      if (hashTags.includes(tag)) {
        inputRef.current.value = "";
        return;
      }

      let splitTags = [];

      tag.split(",").forEach((splitTag) => {
        if (!hashTags.includes(splitTag) && !splitTags.includes(splitTag)) {
          splitTags.push(splitTag);
        }
      });

      inputRef.current.value = "";
      setHashTags((prev) => [...prev, ...splitTags]);
    }
  };

  const deleteHashTag = (selectedHashTag) => {
    setHashTags((prev) =>
      [...prev].filter((hashTag) => hashTag !== selectedHashTag)
    );
  };

  return (
    <Wrapper>
      <Instruction>
        <strong>해쉬태그</strong>를 입력하고 Enter를 눌러주세요.
      </Instruction>
      <HashTagList>
        {hashTags?.map((hashTag) => {
          return (
            <HashTagItem key={hashTag}>
              {hashTag}
              <i
                className="fa-solid fa-xmark"
                onClick={() => deleteHashTag(hashTag)}
              />
            </HashTagItem>
          );
        })}
        <HashTagInput
          autoFocus
          onKeyUp={addHashTag}
          ref={inputRef}
        ></HashTagInput>
      </HashTagList>
    </Wrapper>
  );
}

export default HashTag;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Instruction = styled.div`
  strong {
    color: #fe8800;
  }
`;

const HashTagList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  max-width: 400px;
  margin: 20px 0;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #f2f2f2;
`;

const HashTagItem = styled.li`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 8px 14px 8px 16px;
  border-radius: 16px;
  background-color: #fe8800;
  color: white;
  word-break: keep-all;

  i {
    font-size: 1.2rem;
    margin-left: 8px;
    cursor: pointer;
  }
`;

const HashTagInput = styled.input.attrs({ type: "text" })`
  flex: 1;
  padding: 5px;
`;
