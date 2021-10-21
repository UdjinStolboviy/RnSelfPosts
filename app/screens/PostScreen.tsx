import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native';

import {CommonActions} from '@react-navigation/native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';

import {THEME} from '../constants/Theme';
import {DATA} from '../data';

export const PostScreen = ({route, navigation}) => {
  const {postId, date, booked} = route.params;
  const [value, onChangeText] = React.useState(route.params.title);
  //const [booked, setBooked] = React.useState(booked)
  const iconName = booked ? 'ios-star' : 'ios-star-outline';

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Пост от ' + new Date(date).toLocaleDateString(),
      headerRight: props => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon} {...props}>
          <Item
            title="Teke photo"
            iconName={iconName}
            onPress={() => console.warn('hahahah')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, value]);

  const post = DATA.find(p => p.id === postId);
  React.useEffect(() => {
    navigation.dispatch(CommonActions.setParams({booked: post.booked}));
  }, []);
  const removeHandler = () => {
    Alert.alert('Удаление поста', 'Вы точно хотите удалитьпост?', [
      {
        text: 'Отменить',
        style: 'cancel',
      },
      {text: 'Удалить', style: 'destructive', onPress: () => {}},
    ]);
  };

  return (
    <ScrollView>
      <Image source={{uri: post.img}} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
      <Text>itemId: {JSON.stringify(postId)}</Text>
      <Text>
        otherParam: {JSON.stringify(new Date(date).toLocaleDateString())}
      </Text>
      <Text>booked: {JSON.stringify(booked)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {},
});
