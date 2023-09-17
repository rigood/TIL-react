import { useReducer, useState } from "react";
import styled from "styled-components";
import Student from "./Student";

export const ACTION_TYPES = {
  add: "add",
  delete: "delete",
  mark: "mark",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case ACTION_TYPES.delete:
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case ACTION_TYPES.mark:
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

function Attendance() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <Wrapper>
      <Title>useReducer 출석부</Title>
      <Label>총 학생 수 : {studentInfo.count}명</Label>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: ACTION_TYPES.add, payload: { name } });
          setName("");
        }}
      >
        <Input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">추가</Button>
      </Form>
      <StudentList>
        <Label>학생 명단</Label>
        {studentInfo.students.length === 0 && <li>등록된 학생이 없습니다.</li>}
        {studentInfo.students.map((student) => {
          return (
            <Student
              key={student.id}
              id={student.id}
              name={student.name}
              isHere={student.isHere}
              dispatch={dispatch}
            />
          );
        })}
      </StudentList>
    </Wrapper>
  );
}

export default Attendance;

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: gray;
  color: white;
  word-break: keep-all;
`;

const StudentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
