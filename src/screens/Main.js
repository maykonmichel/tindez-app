import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import logo from '../assets/images/logo.png';
import like from '../assets/images/like.png';
import dislike from '../assets/images/dislike.png';

export default ({navigation: {navigate}}) => {
  const onLogout = useCallback(() => navigate('login'), [navigate]);

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 30,
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

      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: 2,
            },
          }}>
          <Image source={dislike} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: 2,
            },
          }}>
          <Image source={like} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
