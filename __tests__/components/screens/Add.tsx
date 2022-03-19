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
});
