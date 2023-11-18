import { render, screen } from "@testing-library/react";
import Counter from '../components/Counter';
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i)
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  userEvent.click(screen.getByRole('button', { name: '+' }));
  expect(screen.getByTestId('count')).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  userEvent.click(screen.getByRole('button', { name: '-' }));
  expect(screen.getByTestId('count')).toHaveTextContent(-1);
});
