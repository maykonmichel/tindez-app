import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import logo from './src/assets/images/logo.png';

export default () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
    }}>
    <Image source={logo} />

    <TextInput
      autoCapitalize="none"
      placeholder="Digite seu usuário no Github"
      style={{
        marginTop: 20,
        paddingHorizontal: 15,
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
      }}
    />

    <TouchableOpacity
      style={{
        marginTop: 10,
        height: 45,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DF4723',
        borderRadius: 4,
      }}>
      <Text
        style={{
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Enviar
      </Text>
    </TouchableOpacity>
  </View>
);
