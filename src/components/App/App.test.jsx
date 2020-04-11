import React from 'react';
import '@testing-library/jest-dom';

import { render, fireEvent, cleanup } from '../../utils/testUtils';
import App from './App';

afterEach(cleanup);

describe('Todo', () => {
  let container;
  beforeEach(() => {
    container = render(<App />);
  });
  test('Add to do', async () => {
    const { getByLabelText, getByText } = container;
    const text = 'IDK ✅';
    const textInput = getByLabelText(/todo/i);
    const addButton = getByText(/add/i);
    fireEvent.change(textInput, {
      target: { value: text },
    });
    expect(textInput).toHaveValue(text);
    fireEvent.click(addButton);
    expect(getByText(text)).toBeInTheDocument();
    expect(textInput).toHaveValue('');
  });

  test('Should render with a ready todo', async () => {
    const todos = ['asdadas', 'asdas', 'sss'];
    const { getByText } = render(<App />, {
      initialState: { todos },
    });
    todos.forEach((todo) => expect(getByText(todo)).toBeInTheDocument());
  });

  test('delete todo', async () => {
    const todos = ['asdadas', 'asdas', 'sss'];
    const { queryByText } = render(<App />, {
      initialState: { todos },
    });
    const todoToDelete = todos[0];
    const parent = queryByText(todoToDelete).parentElement;
    const deleteButton = parent.querySelector('button');
    expect(deleteButton).not.toBeNull();
    fireEvent.click(deleteButton);
    expect(parent).not.toBeInTheDocument();
  });
});
