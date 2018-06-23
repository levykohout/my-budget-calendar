import React, { Component } from 'react';
import {Picker,StyleSheet, Text, View,ScrollView,Modal,TouchableHighlight,TouchableOpacity,TextInput,Animated,
    Dimensions,TouchableWithoutFeedback} from 'react-native';
import { Container,Button,Icon, Header, Content, DatePicker,Form, Item, Input, Label,Title, Right, Body, Left} from 'native-base';
const { width, height } = Dimensions.get('window');
export default class FormEntryModal extends React.Component {

        state = {
            entryType: 'Expense',
            amount: '0',
            isDateTimePickerVisible: false,
            title:"",
            selectedCategory:null,
            entryDate: new Date(this.props.selectedYear, this.props.selectedMonth, this.props.datePicked),
            recurring:false,
            frequency:'One-Time'
          };
        _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
      _handleDatePicked = (date) => {
          console.log(date);
        this.setState({entryDate:date})
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
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.isOpen !== prevProps.isOpen) {
          
        }
      }
      componentDidMount() {
       
        this.setState({ entryDate: new Date(this.props.selectedYear, this.props.selectedMonth, this.props.datePicked)})
       }
    saveEntry () {
        fetch('http://192.168.1.3:3000/v1/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'title': this.state.title,
                'entryType': this.state.entryType,
                'amount': this.state.amount,
                'entryDate': this.state.entryDate,
                'recurring': this.state.recurring,
                'frequency':this.state.frequency,
            })
      })
          .then((response) =>{
              console.log(response)}
              //show success
            )
          .catch((error) => {
            console.error(error);
          });    
    }
  render() {
         // Render nothing if not visible
    if (!this.props.isOpen) {
        return null;
      }
      
    return (
      <View style={styles.container}>
       <Modal animationType="slide" transparent={false} visible={this.props.isOpen} onRequestClose={this.props.onClose}>
        <Header style={styles.header}>
        <Button 
        transparent
        onPress={() => this.saveEntry()} >
        <Text>Save</Text>
        </Button>
         
          <Right>
            <Button 
            transparent
            onPress={this.props.onClose}>
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
                                    <Picker.Item label="Loan" value="Loan" />
                                    <Picker.Item label="Credit Card" value="Credit Card" />
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
            defaultDate={this.state.entryDate}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 11, 31)}
            locale={"en"}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={this.state.entryDate.toDateString()}
            onConfirm={this._handleDatePicked}
            onCancel={() => this.setState({ isDateTimePickerVisible: false })}
            />
            </Item>
          
            </Form>
          
        </Content>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    // Main container
    container: {
        flex:1,
        ...StyleSheet.absoluteFillObject,   // fill up all screen
              // align popup at the bottom
        backgroundColor: 'transparent',     // transparent background
      },
    header: {
        backgroundColor: '#329BCB',
        flexDirection: 'row',
        paddingRight:20,
    },
     // Semi-transparent background below popup
  backdrop: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    backgroundColor: 'black',
    opacity: 0.5,
  },
  // Popup
  modal: {
       // take half of screen height
    backgroundColor: 'white',
  },
})