import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../../components/Counter';
import { increase, decrease } from '../../modules/counter';
import { RootState } from '../../modules/index';

function CounterContainer () {
    const number = useSelector((state:RootState) => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

export default CounterContainer;