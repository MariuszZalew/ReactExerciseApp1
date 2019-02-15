import { createStore, combineReducers } from "redux";
import counterReducer, { counterInc } from "./count";

import todosReducer, { addTodo } from "./todo";

const store = createStore(
  combineReducers({
    todos: todosReducer,
    counter: counterReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

store.dispatch(addTodo("Go to Wodopojka"));
store.dispatch(addTodo("Do some shopping"));
store.dispatch(counterInc());

window.addTodo = text => store.dispatch(addTodo(text));
window.counterInc = numb => store.dispatch(counterInc(numb));
