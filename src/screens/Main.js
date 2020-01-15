import React, {useCallback} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import logo from '../assets/images/logo.png';

export default ({navigation: {navigate}}) => {
  const onLogout = useCallback(() => navigate('login'), [navigate]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
      }}>
      <TouchableOpacity onPress={onLogout}>
        <Image source={logo} />
      </TouchableOpacity>
    </View>
  );
};
