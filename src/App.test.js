/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Books from './Components/Books';

test('renders learn react link', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Books />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
