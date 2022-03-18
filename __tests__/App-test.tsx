/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Home from '../src/components/screens/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders app correctly', () => {
  renderer.create(<App />);
});

test('render home correctly', () => {
  renderer.create(<Home />);
});
