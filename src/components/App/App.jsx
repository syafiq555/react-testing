import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import generateId from '../../utils/generateId';
import { addTodo } from '../../redux/todos';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todoRef = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = todoRef.current;
    dispatch(addTodo(value));
    todoRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">
          Todo
          <textarea ref={todoRef} type="text" id="todo" />
        </label>
        <button type="submit">Add</button>
      </form>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={generateId()}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
