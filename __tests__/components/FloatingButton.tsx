/**
 * @format
 */

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import FloatingButton from '../../src/components/FloatingButton';
import {StyleSheet, View} from 'react-native';

describe('Floating Button', () => {
  test('render floating button', () => {
    const onPressMock = jest.fn();
    const eventData = {};
    const {getByTestId} = render(
      <View>
        <FloatingButton
          onPressHandler={onPressMock}
          styles={styles.floatingButton}
          size={45}
          color="#0000ff"
          iconName="plus"
          iconSize={30}
          iconColor="#000000"
          testID="button"
        />
      </View>,
    );
    fireEvent.press(getByTestId('button'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
