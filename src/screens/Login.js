import React, {useCallback, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import logo from '../assets/images/logo.png';

export default ({navigation: {navigate}}) => {
  const [user, setUser] = useState('');

  const onSubmit = useCallback(() => {
    // TODO try to authenticate
    navigate('main');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Image source={logo} />

      <TextInput
        autoCapitalize="none"
        placeholder="Digite seu usuário no Github"
        value={user}
        onChangeText={setUser}
        style={styles.username}
      />

      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    height: 45,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DF4723',
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  username: {
    marginTop: 20,
    paddingHorizontal: 15,
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});
