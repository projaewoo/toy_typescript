import CounterContainer from "src/containers/CounterContainer";
import TodosContainer from "src/containers/TodosContainer";

export const MENU = [
  {
    name: "Counter",
    component: <CounterContainer />,
  },
  {
    name: "Todos",
    component: <TodosContainer />,
  },
];
