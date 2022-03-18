/**
 * @format
 */

import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../../../src/components/screens/Home';

describe('Home Screen', () => {
  test('render current date', () => {
    const {getByTestId} = render(<Home />);

    const current = new Date();

    const date = getByTestId('date');
    expect(date.props.children).toBe(current.toLocaleDateString());
  });

  test('render current time', () => {
    const {getByTestId} = render(<Home />);

    const current = new Date();

    const date = getByTestId('time');
    expect(date.props.children).toBe(current.toLocaleTimeString());
  });

  test('render floating button', () => {
    const {getByTestId} = render(<Home />);
    const floatingButton = getByTestId('floatingButton');
    expect(floatingButton.props.children).toBeTruthy();
  });
});
