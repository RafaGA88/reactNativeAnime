import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { View, Text } from 'react-native';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const prevPath = get(props, 'location.state.prevPath', '/');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(actions.loginRequest({ email, password, prevPath }));
  }

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}
