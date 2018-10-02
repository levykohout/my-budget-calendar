import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Container,Button,Icon, Header, Content, DatePicker,Form, Item, Input, Label,Title, Right, Body, Left} from 'native-base';



export default class Login extends React.Component {
    state = {
        username:"",
        password:""
      }

    login(){
        
    }

   render() {
       return (
    <View style={styles.container}>
        <Content>
            <Form>
                <Item fixedLabel>
                    <Label>Username</Label>
                    <Input 
                        onChangeText={(text) => this.setState({username: text})}
                        value={this.state.username}
                    />
                </Item>
                <Item fixedLabel>
                    <Label>Password</Label>
                    <Input 
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                    />
                </Item>
                <Button transparent noDefaultStyles={true} onPress={() => this.login()} title="Login">
                  
                </Button>
            </Form>
        </Content>
    </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },

  });