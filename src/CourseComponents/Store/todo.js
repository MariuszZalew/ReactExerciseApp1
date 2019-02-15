const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text }];
    case REMOVE_TODO:
      return state.filter((item, index) => action.index !== index);
    default:
      return state;
  }
};

export const addTodo = text => ({ type: ADD_TODO, text });
export const removeTodo = index => ({ type: REMOVE_TODO, index });

export default todosReducer;
