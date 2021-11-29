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

//redux-saga 미들웨어 적용
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ReduxThunk from "redux-thunk";
import { rootSaga } from "./modules";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
