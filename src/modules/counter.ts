type CounterAction =
  | {
      type: "counter/INCREASE";
    }
  | {
      type: "counter/DECREASE";
    };

// 액션
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수
function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
