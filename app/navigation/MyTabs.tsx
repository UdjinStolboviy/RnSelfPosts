import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Item} from 'react-navigation-header-buttons';
import {BookmarkedScreen} from '../screens/BookmarkedScreen';
import {MaineScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={MaineScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Item
              title="Toggle Drawer"
              iconName="ios-menu"
              onPress={() => console.warn('hahahah')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={BookmarkedScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <Item
              title="Toggle Drawer"
              iconName="ios-menu"
              onPress={() => console.warn('hahahah')}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PostScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Item
              title="Toggle Drawer"
              iconName="ios-menu"
              onPress={() => console.warn('hahahah')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
