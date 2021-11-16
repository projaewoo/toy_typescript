type TodosAction =
  | {
      type: "todos/CHANGE_INPUT";
      input: string;
    }
  | {
      type: "todos/INSERT";
      todo: {
        id: number;
        text: string;
        done: boolean;
      };
    }
  | {
      type: "todos/TOGGLE";
      id: number;
    }
  | {
      type: "todos/REMOVE";
      id: number;
    };

// 액션 타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수
export const changeInput = (input: string) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;

export const insert = (text: string) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id: number) => ({
  type: TOGGLE,
  id,
});

export const remove = (id: number) => ({
  type: REMOVE,
  id,
});

// 초기 상태
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

// 리듀서 함수
function todos(state = initialState, action: TodosAction) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
