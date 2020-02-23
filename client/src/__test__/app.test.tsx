import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../components/app';

test('should renders home page with send messages link', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/toolbox/i);
  const linkElement = getByText(/Send Messages/i);

  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

test('should renders messages page to send new messages', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const linkElement = getByText(/Send Messages/i);

  expect(linkElement).toBeInTheDocument();

  fireEvent.click(linkElement);
  const inputMessage =  getByPlaceholderText('Enter a message')
  const sendButton = getByText(/Send/i);

  expect(inputMessage).toBeInTheDocument();
  expect(sendButton).toBeInTheDocument();
});
