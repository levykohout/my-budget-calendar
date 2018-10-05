import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Container,Button,Icon, Header, Content, DatePicker,Form, Item, Input, Label,Title, Right, Body, Left} from 'native-base';



export default class Menu extends React.Component {
    static navigationOptions = {
        title:'Menu',
    };

    

    render() {
        const {navigate} = this.props.navigation;
      return (
        <View>
      <Button title = "Go to Account Balance"
      onPress={() =>
        navigate('Account Balance', {name :''})
      } title=">">
      <Icon name="arrow-forward" size={18} color="#333" />
      </Button>
      <Button title = "Go to Transactions"
      onPress={() =>
        navigate('Transactions', {name :''})
      } title=">">
       <Icon name="arrow-forward" size={18} color="#333" />
      </Button>
      <Button title = "Go to Categories"
      onPress={() =>
        navigate('Categories', {name :''})
      } title=">">
       <Icon name="arrow-forward" size={18} color="#333" />
      </Button>
      <Button title = "Go to Calendar"
      onPress={() =>
        navigate('Calendar', {name :''})
      } title=">">
       <Icon name="arrow-forward" size={18} color="#333" />
      </Button>
      <Button title = "Go to Charts"
      onPress={() =>
        navigate('Charts', {name :''})
      } title=">">
       <Icon name="arrow-forward" size={18} color="#333" />
      </Button>
      <Button title = "Logout"
      onPress={() =>
        navigate('Logout', {name :''})
      } title=">">
       <Icon name="arrow-forward" size={18} color="#333" />
      </Button>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },

  });