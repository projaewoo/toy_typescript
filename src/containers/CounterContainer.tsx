import React from "react";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "src/modules/counter";
import Counter from "src/components/Counter";
import { RootState } from "src/modules";

type ContainerType = {
  number: number;
  increaseAsync: () => void;
  decreaseAsync: () => void;
};

const CounterContainer = ({
  number,
  increaseAsync,
  decreaseAsync,
}: ContainerType) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state: RootState) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
