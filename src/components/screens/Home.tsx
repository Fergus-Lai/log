/**
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

const Home = () => {
  const current = new Date();
  return (
    <View>
      <Text testID="date">{current.toLocaleDateString()}</Text>
      <Text testID="time">{current.toLocaleTimeString()}</Text>
    </View>
  );
};

export default Home;
