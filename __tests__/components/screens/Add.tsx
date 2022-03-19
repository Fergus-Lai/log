/**
 * @format
 */

import React from 'react';
import {render} from '@testing-library/react-native';
import Add from '../../../src/components/screens/Add';

describe('Add Screen', () => {
  test('render category field', () => {
    const {getByTestId} = render(<Add />);

    const categoryText = getByTestId('categoryText');
    expect(categoryText.props.children).toBe('Category:');

    const categoryPicker = getByTestId('categoryPicker');
    expect(categoryPicker).toBeTruthy();
  });

  test('render name field', () => {
    const {getByTestId} = render(<Add />);

    const nameText = getByTestId('nameText');
    expect(nameText.props.children).toBe('Name:');

    const nameField = getByTestId('nameField');
    expect(nameField).toBeTruthy();
  });
});
