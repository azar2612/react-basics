import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TestCase from './index';

test('App Works', () => {
  const { container } = render(<TestCase />);
  const buttons = container.querySelectorAll('button');

  expect(buttons[0].textContent).toBe('+ 1');
  expect(buttons[1].textContent).toBe('+ 10');
  expect(buttons[2].textContent).toBe('+ 100');
  expect(buttons[3].textContent).toBe('+ 1000');

  const result = container.querySelector('p');
  expect(result.textContent).toBe('0');

  fireEvent.click(buttons[0]);
  expect(result.textContent).toBe('1');

  fireEvent.click(buttons[1]);
  expect(result.textContent).toBe('11');

  fireEvent.click(buttons[2]);
  expect(result.textContent).toBe('111');

  fireEvent.click(buttons[3]);
  expect(result.textContent).toBe('1111');
});
