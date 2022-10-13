import React from 'react';
import { Text } from 'react-native';
import { MyView } from './styled';

export default function Header() {
  return (
    <MyView>
      <Text style={{ fontSize: '30px' }}>Animes</Text>
    </MyView>
  );
}
