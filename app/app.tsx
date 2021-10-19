import React, {useState} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './constants/Screens';
import {MaineScreen} from './screens/MainScreen';
import {PostScreen} from './screens/PostScreen';
import {THEME} from './constants/Theme';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.MAINE_SCREEN}>
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
  gestureEnabled: false,
  title: 'Мой блог',
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
