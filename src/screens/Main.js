import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import logo from '../assets/images/logo.png';
import like from '../assets/images/like.png';
import dislike from '../assets/images/dislike.png';

import api from '../store/api';

export default ({navigation: {getParam, navigate}}) => {
  const id = getParam('id');

  const [users, setUsers] = useState([]);

  const {avatar: uri, name, bio} = useMemo(() => users[0] || {}, [users]);

  const loadUsers = useCallback(async user => {
    const {data} = await api.get('/devs', {
      headers: {
        user,
      },
    });

    setUsers(data);
  }, []);

  const onLogout = useCallback(() => navigate('login'), [navigate]);

  const onEvaluate = useCallback(
    async evaluation => {
      const [{_id}, ...rest] = users;

      await api.post(`/devs/${_id}/${evaluation}`, null, {
        headers: {
          user: id,
        },
      });

      setUsers(rest);
    },
    [id, users],
  );

  const onDislike = useCallback(() => onEvaluate('dislikes'), [onEvaluate]);
  const onLike = useCallback(() => onEvaluate('likes'), [onEvaluate]);

  useEffect(() => {
    loadUsers(id);
  }, [id, loadUsers]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLogout}>
        <Image source={logo} />
      </TouchableOpacity>

      <View style={styles.card}>
        <Image style={styles.avatar} source={{uri}} />
        <View style={styles.description}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio} numberOfLines={3}>
            {bio}
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={onDislike}>
          <Image source={dislike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onLike}>
          <Image source={like} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 300,
    width: 300,
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },
  button: {
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
  },
  buttons: {
    flexDirection: 'row',
  },
  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
  },
  container: {
    flex: 1,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  description: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
