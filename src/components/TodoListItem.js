// TodoListItem: 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트입니다. todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여 줍니다.

import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

export const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      {/* checked 값이 참이면 checked 클래스를 부여한다 */}
      {/* checked라는 클래스명을 수정하고 싶다면 checkedclass: checked */}
      <div
        className={cn("checkbox", { checked })}
        onClick={() => onToggle(todo.id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
