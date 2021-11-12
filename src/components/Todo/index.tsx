import React from "react";

interface TodoItemProps {
  todo: any;
  onToggle: any;
  onRemove: any;
}

interface TodosProps {
  input: any;
  todos: object;
  onChangeInput: any;
  onInsert: any;
  onToggle: any;
  onRemove: any;
}

const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}: TodosProps) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem todo={1} onToggle={1} onRemove={1} />
        <TodoItem todo={1} onToggle={1} onRemove={1} />
        <TodoItem todo={1} onToggle={1} onRemove={1} />
        <TodoItem todo={1} onToggle={1} onRemove={1} />
        <TodoItem todo={1} onToggle={1} onRemove={1} />
      </div>
    </div>
  );
};

export default Todos;
