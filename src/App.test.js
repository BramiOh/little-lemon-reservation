import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Is exist the title <Little Lemon> on Home Page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Little Lemon/i);
  expect(titleElement).toBeInTheDocument();
});

test('Is exist the button  <Reserve a table>', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reserve a table/i);
  expect(linkElement).toBeVisible();
});

test('Is exist the title <SELECT DATE, TIME AND NUMBER OF DINER> when click on button Reserve a table', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reserve a table/i);
  userEvent.click(linkElement);
  const titleElement = screen.getByText(/SELECT DATE, TIME AND NUMBER OF DINER/i);
  expect(titleElement).toBeInTheDocument();
});

test('Is disabled previous button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Previous/i);
  expect(linkElement).toBeDefined();
});

test('Is enable next button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Next/i);
  expect(linkElement).toBeEnabled();
});

test('Is exist the title <Details> when click on button Next', () => {
  render(<App />);
  const linkElement = screen.getByText(/Next/i);
  userEvent.click(linkElement);
  const titleElement = screen.getByText(/Details/i);
  expect(titleElement).toBeInTheDocument();
});


