import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import { TodoInsert } from "./components/TodoInsert";
import { TodoList } from "./components/TodoList";
import { TodoTemplate } from "./components/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  // 오브젝트의 id값은 랜더링 될 필요가 없기 때문에 useRef에 담기
  const nextId = useRef(5);

  // 추가
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;

      console.log(todos);
    },
    [todos]
  );

  // 삭제
  const onRemove = useCallback(
    (removeId) => {
      // filter 👉 조건에 만족하는 요소만 추출해서 새로운 배열을 만들어줌
      // 💡 목록의 아이디중 현재 클릭한 목록의 아이디와 같지 않는 것들만 남겨줌
      // 리액트 컴포넌트에서 배열의 불변성을 지키면서 배열 원소를 제거해야 할 경우, 배열 내장 함수인 filter를 사용
      setTodos(todos.filter((todo) => todo.id !== removeId));
    },
    [todos]
  );

  // 수정
  const onToggle = useCallback(
    (checkId) => {
      // 불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 map을 사용
      // https://thebook.io/080203/ch10/03/04/01/
      setTodos(
        todos.map((todo) =>
          todo.id === checkId ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
};

export default App;
