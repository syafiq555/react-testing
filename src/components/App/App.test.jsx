import React from 'react';
import '@testing-library/jest-dom';

import { render, fireEvent } from '../../utils/testUtils';
import App from './App';

test('Add to do', async () => {
  const { getByLabelText, getByText } = render(<App />);
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
