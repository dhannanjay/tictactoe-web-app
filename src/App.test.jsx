import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders board header', () => {
  const { getByText } = render(<App />);
  const boardElement = getByText(/Board/i);
  expect(boardElement).toBeInTheDocument();
});
