//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Platform } from 'react-native';

// import { THEME } from '../constants/Theme';
// import { MaineScreen } from "../screens/MainScreen";
// import { PostScreen } from "../screens/PostScreen";
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import { BookmarkedScreen } from '../screens/BookmarkedScreen';
// //import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Screens } from '../constants/Screens';
// import { AppHeaderIcon } from '../components/AppHeaderIcon';


// const PostNavigator = createStackNavigator(
//   {
//     Main: MaineScreen,
//     Post: {
//       screen: PostScreen
//     }
//   },
//   {
//     initialRouteName: 'Main',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
//       },
//       headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
//     }
//   }
// )

// const BookedNavigator = createStackNavigator(
//   {
//     Booked:BookmarkedScreen 
// ,
//     Post: PostScreen
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
//       },
//       headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
//     }
//   }
// )
// //const Tab = createMaterialBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const BottomNavigator = () => {
//     return (
   
//       <Stack.Navigator initialRouteName={Screens.MAINE_SCREEN}>
//         <Stack.Screen
//           name={Screens.MAINE_SCREEN}
//           component={MaineScreen}
//           options={{
//             ...optionMaine,
//           }}
//         />
//         <Stack.Screen
//           name={Screens.POSTS}
//           component={PostScreen}
//           options={{
//             ...optionPost,
//           }}
//         />
//       </Stack.Navigator>
//   );
// }
  
   

// const optionBooked = {
//   gestureEnabled: false,
//   title: 'Booked',
//   headerStyle: {
//     backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
//   },
//   headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// };

// const optionPost = {
//   gestureEnabled: false,
//   title: 'Пост номер 42',
//   headerStyle: {
//     backgroundColor: THEME.DANGER_COLOR,
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// };

// const optionMaine = {
//   gestureEnabled: false,
//   title: 'Мой блог',
//   headerRight: props => (
//     <HeaderButtons HeaderButtonComponent={AppHeaderIcon} {...props}>
//       <Item
//         title="Teke photo"
//         iconName="ios-camera"
//         onPress={() => console.warn('hahahah')}
//       />
//     </HeaderButtons>
//   ),
//   headerLeft: props => (
//     <HeaderButtons HeaderButtonComponent={AppHeaderIcon} {...props}>
//       <Item
//         title="Toggle Drawer"
//         iconName="ios-menu"
//         onPress={() => console.warn('hahahah')}
//       />
//     </HeaderButtons>
//   ),
//   headerStyle: {
//     backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
//   },
//   headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// };


// export const AppNavigation = createAppContainer(PostNavigator)

