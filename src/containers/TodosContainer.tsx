import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import todos, { changeInput, insert, toggle, remove } from "src/modules/todos";
import Todos from "src/components/Todo";
import { RootState } from "src/modules";

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

// version 1.1
export default connect(
  ({ todos }: RootState) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput, //dispatch(changeInput)
    insert, //dispatch(insert)
    toggle, //dispatch(toggle)
    remove, //dispatch(remove)
  }
)(TodosContainer);
