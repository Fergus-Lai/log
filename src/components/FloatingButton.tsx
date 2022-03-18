/**
 * @format
 */

import React, {FC} from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FloatingButtonProp {
  onPressHandler: (event: GestureResponderEvent) => void;
  styles: ViewStyle;
  size: number;
  color: ColorValue;
  iconName: string;
  iconSize: number;
  iconColor: ColorValue;
  testID: string;
}

const FloatingButton: FC<FloatingButtonProp> = (props): JSX.Element => {
  return (
    <Pressable
      onPress={props.onPressHandler}
      style={props.styles}
      testID={props.testID}>
      <View
        style={{
          backgroundColor: props.color,
          width: props.size,
          height: props.size,
          borderRadius: props.size,
        }}>
        <Icon
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      </View>
    </Pressable>
  );
};

export default FloatingButton;
