/* eslint-disable react/prop-types */
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { StatusBar, View } from 'react-native';

export default function MyStatusBar(
  backgroundColor,
  barStyle = 'dark-content',
) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}
