import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,} from 'react-navigation';
import HomeScreen from './Client/src/HomeScreen.js';
import ProfileScreen from './Client/src/ProfileScreen.js';
import CalendarScreen from './Client/src/CalendarScreen.js';

export default class App extends React.Component {
  render() {
  return <RootStack/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 cell:{
backgroundColor:'#fff',
alignItems:'flex-start',
justifyContent:'center',
 } 
});
//Navigation/Routing
const RootStack = createStackNavigator(
  {
  Home: HomeScreen,
  Profile:ProfileScreen,
  Calendar:CalendarScreen,
  },
   {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#329BCB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)


