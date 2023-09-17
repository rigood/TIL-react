import styled from "styled-components";
import { ACTION_TYPES } from "./Attendance";

function Student({ id, name, isHere, dispatch }) {
  const markAttendance = () => {
    dispatch({ type: ACTION_TYPES.mark, payload: { id } });
  };

  const deleteStudent = () => {
    dispatch({ type: ACTION_TYPES.delete, payload: { id } });
  };

  return (
    <ListItemStudent>
      <input type="checkbox" checked={isHere} onChange={markAttendance} />
      <StudentName onClick={markAttendance} $isHere={isHere}>
        {name}
      </StudentName>
      <Button onClick={deleteStudent}>del</Button>
    </ListItemStudent>
  );
}

export default Student;

const ListItemStudent = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StudentName = styled.span`
  cursor: pointer;
  text-decoration: ${({ $isHere }) => $isHere && "line-through"};
`;

const Button = styled.button`
  padding: 4px 8px;
  background-color: gray;
  color: white;
  word-break: keep-all;
`;
