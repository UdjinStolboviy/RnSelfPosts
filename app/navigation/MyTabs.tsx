/* eslint-disable react/react-in-jsx-scope */
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';
import {Item} from 'react-navigation-header-buttons';
import {Screens} from '../constants/Screens';
import {BookmarkedScreen} from '../screens/BookmarkedScreen';
import {MaineScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';

const Tab = createBottomTabNavigator();

export const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Screens.POSTS} component={PostScreen} />
      <Tab.Screen name={Screens.BOOKED_SCREEN} component={BookmarkedScreen} />
    </Tab.Navigator>
  );
};
