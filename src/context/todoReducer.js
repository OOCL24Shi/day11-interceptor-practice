export const ADD = "Add"
export const REMOVE = "Remove"
export const TOGGLE = "Toggle"
export const INIT="INIT"
export const EDIT = "EDIT";

export const initialState = [];

export const todoReducer = (state, action) => {

  switch(action.type) {
    case ADD:
      return [...state, action.payload]
    case TOGGLE:
      return state.map((todo) =>
          todo.id === action.payload ? {...todo, done: !todo.done} : todo
      ) ;
    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload);
    case INIT:
      return action.payload;
    case EDIT:
      return state.map((todo) =>
          todo.id === action.payload.id
              ? { ...todo, text: action.payload.text }
              : todo
      );
  }

  return state;
};