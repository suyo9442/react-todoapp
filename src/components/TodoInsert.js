// TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다. state를 통해 인풋의 상태를 관리합니다.
import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

export const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  // 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라,
  // 한 번 함수를 만들고 재사용할 수 있도록 useCallback Hook을 사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // useCallback을 남용해두 되나,,,?
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); // value값 초기화

      e.preventDefault();
    },
    [onInsert, value]
  ); // ❓

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit" onClick={onSubmit}>
        <MdAdd />
      </button>
    </form>
  );
};
