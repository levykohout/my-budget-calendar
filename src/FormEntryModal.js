import React, { Component } from 'react';
import {Picker,StyleSheet, Text, View,ScrollView,Modal,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import { Container,Button,Icon, Header, Content, DatePicker,Form, Item, Input, Label,Title, Right, Body, Left} from 'native-base';
export default class FormEntryModal extends React.Component {
    constructor(props){
        super(props);
       
    }
    state = {
        entryType:null,
        amount: '',
        isDateTimePickerVisible: false,
        title:"",
        datePicked:this.props.datePicked,
        selectedCategory:null,
        saved: 'Save'

      };
      componentWillMount() {
        this.setState({datePicked:this.props.datePicked})
      }
    
    
      _handleDatePicked = (date) => {
        this.setState({datePicked:date})
        this._hideDateTimePicker();
    };
    displayCategory = () => {
        if(this.state.entryType != "Income"){
            return (<Item fixedLabel>
            <Label>Select Category</Label>
                <Picker
                    mode="dropdown"
                    placeholder="Select Entry Type"
                    placeholderStyle={{ color: "#2874F0" }}
                    note={false}
                    selectedValue={this.state.selectedCategory}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedCategory: itemValue})}>
                    <Picker.Item label="Bill" value="Bill"/>
                    <Picker.Item label="Expense" value="Expense" />
                    <Picker.Item label="Income" value="Income" />
                </Picker>
            </Item>);
        }
        else{
            return <Item></Item>
        }
    };
    saveEntry(){
       
       this.setState({saved:'Success'});
        
    }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
        <Button 
        transparent
        onPress={() => this.saveEntry()} >
        <Text>{this.state.saved}</Text>
        </Button>
         
          <Right>
            <Button transparent>
        
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
            <Form>
            <Item fixedLabel>
            <Label>Title</Label>
              <Input 
              onChangeText={(text) => this.setState({title: text})}
              value={this.state.title}
              />
            </Item>
            <Item fixedLabel>
            <Label>Select Entry Type</Label>
           
            <Picker
                                    mode="dropdown"
                                    placeholder="Select Entry Type"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    note={false}
                                    selectedValue={this.state.entryType}
                                    style={{ height: 50, width: 100 }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({entryType: itemValue})}>
                                    <Picker.Item label="Bill" value="Bill"/>
                                    <Picker.Item label="Expense" value="Expense" />
                                    <Picker.Item label="Income" value="Income" />
                                </Picker>
                               
                                </Item>
                                    
                                <View>{this.displayCategory()}</View> 
                              
            <Item fixedLabel>
            <Label>Amount</Label>
              <Input 
                onChangeText={(text) => this.setState({amount: text})}
                value={this.state.amount}
                keyboardType="numeric"
                keyboardAppearance="dark"
                />
            </Item>
            <Item fixedLabel>
            <Label>Entry Date</Label>
            <DatePicker
            defaultDate={new Date()}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            onConfirm={this._handleDatePicked}
            onCancel={() => this.setState({ isDateTimePickerVisible: false })}
            />
            </Item>
          
            </Form>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#329BCB',
        flexDirection: 'row',
        paddingRight:20,
    },
})