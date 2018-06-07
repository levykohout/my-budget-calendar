import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title:'Home',
    };
    render() {
        const {navigate} = this.props.navigation;
      return (
        <View>
      <Button title = "Go to Profile"
      onPress={() =>
        navigate('Profile', {name :'Jane'})
      }/>
      <Button title = "Go to Calendar"
      onPress={() =>
        navigate('Calendar', {name :'Jane'})
      }/>
      </View>
      );
    }
  }