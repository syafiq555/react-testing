export const TODO_TYPES = {
  ADD: 'todo/add',
  DELETE: 'todo/delete',
};

const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TODO_TYPES.ADD:
      return [...state, payload];
    case TODO_TYPES.DELETE:
      return state.filter((todo) => todo !== payload);
    default:
      return state;
  }
};

export const addTodo = (todo) => (dispatch) => {
  dispatch({ type: TODO_TYPES.ADD, payload: todo });
};

export const deleteTodo = (todo) => (dispatch) => {
  dispatch({ type: TODO_TYPES.DELETE, payload: todo });
};

export default todoReducer;
