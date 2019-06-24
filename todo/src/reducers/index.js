import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED, CLEAR_ALL } from '../actions';

const initialState = {
  todos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case CLEAR_ALL:
      return {
        ...state,
        todos: [],
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };

    default:
      return state;
  }
}

export default reducer;
