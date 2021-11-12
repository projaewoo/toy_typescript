import React from 'react';

interface CounterProps {
  number: number,
  onIncrease: any,
  onDecrease: any,
};

const Counter = ({ number, onIncrease, onDecrease }: CounterProps) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;