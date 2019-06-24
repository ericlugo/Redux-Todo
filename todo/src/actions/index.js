export const ADD_TODO = 'ADD_TODO';
export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_COMPLETED = 'DELETE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';
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

export const clearAll = () => {
  return {
    type: CLEAR_ALL,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    payload: index,
  };
};

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    payload: index,
  };
};
