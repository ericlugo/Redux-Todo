import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: [
    { value: 'one', completed: false },
    { value: 'two', completed: false },
    { value: 'three', completed: true },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    default:
      return state;
  }
}

export default reducer;
