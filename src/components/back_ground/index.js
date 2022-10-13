/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export default function MyBackGround(props) {
  const style = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  });

  return (
    <ImageBackground
      source={require('../../images/saitama.jpg')}
      style={style.imageBackground}
    >
      {props.content}
    </ImageBackground>
  );
}
