import React, { ChangeEvent, FormEvent } from "react";

type TodoItemType = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemType) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

type TodosType = {
  input: string;
  todos: {
    id: number;
    text: string;
    done: boolean;
  }[];
  onChangeInput: (input: string) => void;
  onInsert: (text: string) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}: TodosType) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
