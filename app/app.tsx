import React, {useState} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './constants/Screens';
import {MaineScreen} from './screens/MainScreen';
import {PostScreen} from './screens/PostScreen';
import {THEME} from './constants/Theme';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from './components/AppHeaderIcon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookmarkedScreen} from './screens/BookmarkedScreen';
//import {BottomTabBar} from './navigation/MyTabs';
//import AppNavigation from './navigation/AppNavigation';

const App = props => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabBar = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name={Screens.MAINE_SCREEN}
          component={MaineScreen}
          options={{
            ...optionMaine,
          }}
        />
        <Tab.Screen
          name={Screens.BOOKED_SCREEN}
          component={BookmarkedScreen}
          options={{
            ...optionBooked,
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Tab'}
          component={BottomTabBar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Screens.MAINE_SCREEN}
          component={MaineScreen}
          options={{
            ...optionMaine,
          }}
        />

        <Stack.Screen
          name={Screens.POSTS}
          component={PostScreen}
          options={{
            ...optionPost,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const optionBooked = {
  gestureEnabled: false,
  title: 'Booked',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const optionPost = {
  gestureEnabled: false,
  title: 'Пост номер 42',
  headerStyle: {
    backgroundColor: THEME.DANGER_COLOR,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const optionMaine = {
  title: 'Мой блог',
  headerRight: props => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon} {...props}>
      <Item
        title="Teke photo"
        iconName="ios-camera"
        onPress={() => console.warn('hahahah')}
      />
    </HeaderButtons>
  ),
  headerLeft: props => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon} {...props}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => console.warn('hahahah')}
      />
    </HeaderButtons>
  ),
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

// const styles = StyleSheet.create({
//   continer: {
//     with: '100%',
//     height: "100%",
//   }
// });

export default App;
