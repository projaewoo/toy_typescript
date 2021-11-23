import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import member from "./member";

const rootReducer = combineReducers({
  counter,
  todos,
  member,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
