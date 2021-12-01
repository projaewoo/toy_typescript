import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "modules/todos";
import Todos from "components/Todo";
import { RootState } from "modules";

//   src/modules/todos의 initialState와 액션 생성 함수의 type를 모조리 정의
type TodosContainerType = {
  input: string;
  todos: {
    id: number;
    text: string;
    done: boolean;
  }[];
  changeInput: (input: string) => void;
  insert: (text: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
};

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}: TodosContainerType) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todos }: RootState) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
