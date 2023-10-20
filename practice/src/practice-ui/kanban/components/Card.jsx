import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../recoil";
import Icon from "./Icon";

function Card({ index, boardId, todoId, todoText, dayColor }) {
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const setTodos = useSetRecoilState(todoAtom);

  const toggleEditMode = () => setIsEditing((prev) => !prev);

  const editTodo = () => {
    const textInput = inputRef.current?.value;
    if (textInput === "") return;

    setTodos((allBoards) => {
      const targetBoard = [...allBoards[boardId]].map((card) => ({
        ...card,
        text: card.id === todoId ? textInput : card.text,
      }));
      return {
        ...allBoards,
        [boardId]: targetBoard,
      };
    });
    toggleEditMode();
  };

  const deleteTodo = () => {
    setTodos((allBoards) => {
      const targetBoard = [...allBoards[boardId]].filter(
        (card) => card.id !== todoId
      );
      return {
        ...allBoards,
        [boardId]: targetBoard,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editTodo();
  };

  return (
    <Draggable draggableId={String(todoId)} index={index}>
      {(provided, snapshot) => (
        <CardWrapper
          dayColor={dayColor}
          isDragging={snapshot.isDragging}
          isEditing={isEditing}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onSubmit={onSubmit}
        >
          {!isEditing ? (
            <>
              <CardText>{todoText}</CardText>
              <CardIcons>
                <Icon
                  onClick={toggleEditMode}
                  color={dayColor}
                  icon="fa fa-pencil"
                  isHover
                />
                <Icon
                  onClick={deleteTodo}
                  color={dayColor}
                  icon="fa fa-trash"
                  isHover
                />
              </CardIcons>
            </>
          ) : (
            <>
              <CardEditing
                type="text"
                defaultValue={todoText}
                autoFocus
                ref={inputRef}
              />
              <Icon onClick={editTodo} color={dayColor} icon="fa fa-check" />
            </>
          )}
        </CardWrapper>
      )}
    </Draggable>
  );
}

export default React.memo(Card);

const CardIcons = styled.div`
  display: none;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: white;
`;

const CardWrapper = styled.form`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:hover ${CardIcons} {
    display: flex;
  }

  ${(props) =>
    props.isDragging &&
    css`
      opacity: 0.5;
    `}

  ${(props) =>
    props.isEditing &&
    css`
      outline: 1px solid ${props.dayColor};
    `}
`;

const CardText = styled.div`
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardEditing = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  font-family: inherit;
  font-size: 1.6rem;
  line-height: 1.5;
`;
