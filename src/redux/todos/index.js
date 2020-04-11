export const TODO_TYPES = {
  ADD: 'todo/add',
  DELETE: 'todo/delete',
};

const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TODO_TYPES.ADD:
      return { ...state, ...payload };
    case TODO_TYPES.DELETE:
      return state.filter((todo) => todo !== payload);
    default:
      return state;
  }
};

export default todoReducer;
