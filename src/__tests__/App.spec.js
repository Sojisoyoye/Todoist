/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../App';

beforeEach(cleanup);

describe('<App />', () => {
  it('renders the application', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('application')).toBeTruthy();
    expect(queryByTestId('application').classList.contains('darkmode')).toBeFalsy();
  });

  it('renders the task checkbox and accepts a click', () => {
    const { queryByTestId } = render(<App darkModeDefault />);
    expect(queryByTestId('application')).toBeTruthy();
    expect(queryByTestId('application').classList.contains('darkmode')).toBeTruthy();
  });
});
