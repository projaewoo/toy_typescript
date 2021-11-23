type MemberActionType =
  | {
      type: "member/REGISTER";
      id: string;
    }
  | {
      type: "member/REMOVE";
      id: string;
    };

// 액션 타입
const REGISTER = "member/REGISTER" as const;
const REMOVE = "member/REMOVE" as const;

// 액션 생성 함수
export const register = (id: string) => ({
  type: REGISTER,
  id,
});

export const remove = (id: string) => ({
  type: REMOVE,
  id,
});

// 초기 상태
const initialState = {
  members: [
    {
      id: "minji",
    },
  ],
};

// 리듀서 함수
function member(state = initialState, action: MemberActionType) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        members: state.members.concat({ id: action.id }),
      };
    case REMOVE:
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.id),
      };
    default:
      return state;
  }
}

export default member;
