export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (item) => {
  return {
    type: ADD_TODO,
    payload: {
      value: item,
      completed: false,
    },
  };
};

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
};
