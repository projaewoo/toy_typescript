import CounterContainer from "src/containers/CounterContainer";
import TodosContainer from "src/containers/TodosContainer";
import MemberContainer from "src/containers/MemberContainer";

export const MENU = [
  {
    name: "Counter",
    component: <CounterContainer />,
  },
  {
    name: "Todos",
    component: <TodosContainer />,
  },
  {
    name: "Member",
    component: <MemberContainer />,
  },
];
