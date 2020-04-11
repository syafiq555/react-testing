import React from 'react';

import generateId from '../../utils/generateId';

const App = () => {
  const todoRef = React.useRef(null);
  const [{ todos }, setState] = React.useReducer((s, a) => ({ ...s, ...a }), {
    todos: [],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = todoRef.current;
    setState({ todos: [...todos, value] });
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
