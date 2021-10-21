import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {Post} from '../components/Post';
import {DATA} from '../data';

export const MaineScreen = ({navigation}) => {
  const openPostHandler = post => {
    return navigation.push('Posts', {postId: post.id, date: post.date});
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
