// const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";
const INC_COUNTER = "INC_COUNTER";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return state + 1;
    default:
      return state;
  }
};

export const counterInc = () => ({ type: INC_COUNTER });

export default counterReducer;
