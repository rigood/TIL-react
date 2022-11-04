import React, { useReducer, useState } from "react";
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
    <>
      <h1>출석부</h1>
      <p>총 학생 수: {studentInfo.count}명</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: ACTION_TYPES.add, payload: { name } });
          setName("");
        }}
      >
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
      {studentInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </>
  );
}

export default Attendance;
