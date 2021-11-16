import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Counter from "src/components/Counter";
import { RootState } from "src/modules";

import { increase, decrease } from "src/modules/counter";

type CounterContainerType = {
  number: number;
  increase: () => void;
  decrease: () => void;
};

const CounterContainer = ({
  number,
  increase,
  decrease,
}: CounterContainerType) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
const mapStateToProps = (state: RootState) => ({
  number: state.counter.number,
});

// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapDispatchToProps = (dispatch: Dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
