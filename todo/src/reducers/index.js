import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
  CLEAR_ALL,
  PULL_DATASET,
  LOCAL_STORAGE,
} from '../actions';

const initialState = {
  todos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      localStorage.setItem(LOCAL_STORAGE, JSON.stringify([...state.todos, action.payload]));
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case CLEAR_ALL:
      localStorage.setItem(LOCAL_STORAGE, JSON.stringify([]));
      return {
        ...state,
        todos: [],
      };
    case CLEAR_COMPLETED:
      localStorage.setItem(
        LOCAL_STORAGE,
        JSON.stringify(state.todos.filter((todo) => !todo.completed)),
      );
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    case TOGGLE_TODO:
      localStorage.setItem(
        LOCAL_STORAGE,
        JSON.stringify(
          state.todos.map((todo, index) =>
            action.payload === index ? { ...todo, completed: !todo.completed } : todo,
          ),
        ),
      );
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case DELETE_TODO:
      localStorage.setItem(
        LOCAL_STORAGE,
        JSON.stringify(state.todos.filter((todo, index) => index !== action.payload)),
      );
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    case PULL_DATASET:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
