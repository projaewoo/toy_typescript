import CounterContainer from "containers/CounterContainer";
import TodosContainer from "containers/TodosContainer";
import MemberContainer from "containers/MemberContainer";
import Users from "components/Users";

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
  {
    name: "Saga_GerUsers",
    component: <Users />,
  },
];
