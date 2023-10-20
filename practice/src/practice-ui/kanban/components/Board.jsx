import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { Droppable } from "react-beautiful-dnd";
import { todoAtom } from "../recoil";
import Card from "./Card";
import Icon from "./Icon";

function Board({ boardId, todos, dayColor }) {
  const setTodos = useSetRecoilState(todoAtom);

  const createTodo = () => {
    const todoTextInput = prompt("할일을 입력해주세요.");

    if (todoTextInput === "" || todoTextInput === null) return;

    const newTodo = {
      id: Date.now(),
      text: todoTextInput,
    };

    setTodos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newTodo],
      };
    });
  };

  const deleteBoard = () => {
    if (window.confirm(`${boardId}를 삭제하시겠습니까?`)) {
      setTodos((allBoards) => {
        const allBoardsArray = Object.entries(allBoards);

        const newBoardsArray = allBoardsArray.filter(
          (board) => board[0] !== boardId
        );

        const newBoards = Object.fromEntries(newBoardsArray);

        return {
          ...newBoards,
        };
      });
    }
  };

  const editBoard = () => {
    const boardTitleInput = prompt("제목을 수정해주세요.", boardId);

    if (boardTitleInput === "" || boardTitleInput === null) return;

    setTodos((allBoards) => {
      const allBoardsArray = Object.entries(allBoards);

      const newBoardsArray = allBoardsArray.map((board) => {
        if (board[0] === boardId) {
          return [boardTitleInput, board[1]];
        } else {
          return board;
        }
      });

      const newBoards = Object.fromEntries(newBoardsArray);

      return {
        ...newBoards,
      };
    });
  };

  return (
    <BoardWrapper>
      <Header>
        <Title color={dayColor}>{boardId}</Title>
        <Icons>
          <Icon
            color={dayColor}
            icon="fa fa-plus"
            onClick={createTodo}
            isHover
          />
          <Icon
            color={dayColor}
            icon="fa fa-pencil"
            onClick={editBoard}
            isHover
          />
          <Icon
            color={dayColor}
            icon="fa fa-trash"
            onClick={deleteBoard}
            isHover
          />
        </Icons>
      </Header>
      <Droppable droppableId={boardId} type="card">
        {(provided, snapshot) => (
          <Area ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <Card
                key={todo.id}
                index={index}
                boardId={boardId}
                todoId={todo.id}
                todoText={todo.text}
                dayColor={dayColor}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </BoardWrapper>
  );
}

export default Board;

const BoardWrapper = styled.div`
  width: 250px;
  height: fit-content;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  background-color: #fffdf6;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  padding: 2rem;
  margin-right: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`;

const Icons = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${(props) => props.color};
  word-break: break-all;
  word-wrap: break-word;

  &::selection {
    color: white;
    background: ${(props) => props.color};
  }
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
