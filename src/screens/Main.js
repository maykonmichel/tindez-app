import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

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

      <View
        style={{
          borderWidth: 1,
          borderColor: '#DDD',
          borderRadius: 8,
          margin: 30,
        }}>
        <Image
          style={{
            height: 300,
            width: 300,
          }}
          source={null}
        />
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#333',
            }}>
            Maykon Michel
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#999',
              marginTop: 5,
              lineHeight: 18,
            }}
            numberOfLines={3}>
            ez.developer
          </Text>
        </View>
      </View>
    </View>
  );
};
