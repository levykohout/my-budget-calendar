import React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title:'Profile',
    }
    render() {
        const {navigate} = this.props.navigation;
      return (
      <View>
          <Image source={{}}/>
      <Text>Welcome, Jane</Text>
      <Text>This is your profile View</Text>
      </View>
      );
    }
  }