import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Store from "./CourseComponents/Store/index";
import App from "./App.jsx";
//Intive course App files
// import App2 from "./CourseComponents/App2";
import registerServiceWorker from "./registerServiceWorker";
// import { createStore, combineReducers } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// const ADD_TODO = "ADD_TODO";
// const todosReducer = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, { text: action.text }];
//     default:
//       return state;
//   }
// };

// const store = createStore(
//   combineReducers({
//     todos: todosReducer
//   }),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.dispatch({ type: "ADD_TODO", text: "Go to mememememe" });

// const addTodo = text => ({ type: ADD_TODO, text });
// window.addTodo = text => store.dispatch(addTodo(text));
