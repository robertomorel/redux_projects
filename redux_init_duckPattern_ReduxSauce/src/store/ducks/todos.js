import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addTodo: ["text"],
  toggleTodo: ["id"],
  removeTodo: ["id"]
});

/*
// -- Todo este código será substituído pelo código acima. 
export const Types = {
  ADD: "todos/ADD",
  TOGGLE: "todos/TOGGLE",
  REMOVE: "todos/REMOVE",
};

export const Creators = {
  addTodo: text => ({
    type: Types.ADD,
    payload: {
      text
    }
  }),

  toggleTodo: id => ({
    type: Types.TOGGLE,
    payload: {
      id
    }
  }),

  removeTodo: id => ({
    type: Types.REMOVE,
    payload: {
      id
    }
  })
};
*/

/**
 * Handlers
 */
const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false }
];

const toggle = (state = INITIAL_STATE, action) =>
  state.map(
    todo =>
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter(todo => todo.id !== action.id);

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove
});
