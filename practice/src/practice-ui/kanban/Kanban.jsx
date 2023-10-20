import styled from "styled-components";
import { useRecoilState } from "recoil";
import { todoAtom } from "./recoil";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Board from "./components/Board";
import { getdayColor } from "./utils";

function Kanban() {
  const [todos, setTodos] = useRecoilState(todoAtom);

  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (type === "board") {
      setTodos((allBoards) => {
        const allBoardsArray = Object.entries(allBoards);
        const targetBoard = allBoardsArray[source.index];

        allBoardsArray.splice(source.index, 1);
        allBoardsArray.splice(destination?.index, 0, targetBoard);

        const newBoards = Object.fromEntries(allBoardsArray);

        return {
          ...newBoards,
        };
      });
    }

    if (type === "card") {
      // 같은 Board 내 드래그앤드롭
      if (destination.droppableId === source.droppableId) {
        setTodos((allBoards) => {
          const sourceBoard = [...allBoards[source.droppableId]];
          const todoObj = sourceBoard[source.index];

          sourceBoard.splice(source.index, 1);
          sourceBoard.splice(destination?.index, 0, todoObj);

          return {
            ...allBoards,
            [source.droppableId]: sourceBoard,
          };
        });
      }

      // 다른 Board 간 드래그앤드롭
      if (destination.droppableId !== source.droppableId) {
        setTodos((allBoards) => {
          const sourceBoard = [...allBoards[source.droppableId]];
          const destinationBoard = [...allBoards[destination.droppableId]];
          const todoObj = sourceBoard[source.index];

          sourceBoard.splice(source.index, 1);
          destinationBoard.splice(destination?.index, 0, todoObj);

          return {
            ...allBoards,
            [source.droppableId]: sourceBoard,
            [destination.droppableId]: destinationBoard,
          };
        });
      }
    }
  };

  const createBoard = () => {
    const boardTitleInput = prompt("제목을 입력해주세요.");

    if (boardTitleInput === "" || boardTitleInput === null) return;

    if (Object.keys(todos).includes(boardTitleInput)) {
      return alert("동일한 제목이 이미 존재합니다.");
    }

    setTodos((allBoards) => {
      return {
        ...allBoards,
        [boardTitleInput]: [],
      };
    });
  };

  return (
    <Wrapper>
      <Header>
        <CreateBoardBtn onClick={createBoard}>
          <i className="fa fa-plus"></i>
        </CreateBoardBtn>
      </Header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="board" direction="horizontal">
          {(provided, snapshot) => (
            <BoardsWrapper ref={provided.innerRef} {...provided.droppableProps}>
              {Object.keys(todos).map((boardId, boardIndex) => (
                <Draggable
                  draggableId={boardId}
                  index={boardIndex}
                  key={boardId}
                >
                  {(provided2, snapshot2) => (
                    <div
                      ref={provided2.innerRef}
                      {...provided2.draggableProps}
                      {...provided2.dragHandleProps}
                    >
                      <Board
                        boardId={boardId}
                        key={boardId}
                        todos={todos[boardId]}
                        dayColor={getdayColor(boardId)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </BoardsWrapper>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
}

export default Kanban;

const Wrapper = styled.div`
  min-width: fit-content;
  min-height: 100vh;
  background-color: #f2f1ed;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 1rem;
`;

const CreateBoardBtn = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b1a79b;
  color: white;
  cursor: pointer;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  i {
    font-size: 2.4rem;
  }
`;

const BoardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
