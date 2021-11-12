import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// 스토어 생성
import { createStore } from "redux";
// Provider 컴포넌트를 이용해서 리덕스 적용
import { Provider } from "react-redux";
// 패키지 추가해서 리덕스 적용
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
