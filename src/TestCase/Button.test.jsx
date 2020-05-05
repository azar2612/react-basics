import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

let count;

const increment = (increment) => {
  count += increment;
};

test('+1 Button Works', () => {
  count = 0;
  const { container } = render(
    <Button type="button" increment={1} clicker={increment} />,
  );

  const button = container.firstChild;
  expect(button.textContent).toBe('+ 1');
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(1);
});

test('+10 Button Works', () => {
  count = 0;
  const { container } = render(
    <Button type="button" increment={10} clicker={increment} />,
  );

  const button = container.firstChild;
  expect(button.textContent).toBe('+ 10');
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(10);
});

test('+100 Button Works', () => {
  count = 0;
  const { container } = render(
    <Button type="button" increment={100} clicker={increment} />,
  );

  const button = container.firstChild;
  expect(button.textContent).toBe('+ 100');
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(100);
});
