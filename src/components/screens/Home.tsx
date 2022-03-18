/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FloatingButton from '../FloatingButton';

const Home = () => {
  const current = new Date();
  return (
    <View>
      <Text testID="date">{current.toLocaleDateString()}</Text>
      <Text testID="time">{current.toLocaleTimeString()}</Text>
      <FloatingButton
        onPressHandler={() => {}}
        styles={style.floatingButton}
        size={45}
        color="#0000ff"
        iconName="plus"
        iconSize={30}
        iconColor="#ffffff"
        testID="floatingButton"
      />
    </View>
  );
};

const style = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default Home;
