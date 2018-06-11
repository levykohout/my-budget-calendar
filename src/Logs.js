import React from 'react';
import { StyleSheet, Text, View,ScrollView,Modal,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Icon, Container,Button,Content, Header, DatePicker,Picker,Title, Right, Body, Left} from 'native-base';

import { Form, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import FormEntry from'./FormEntryModal';

export default class Logs extends React.Component {
    
    state = {
        modalVisible: false,
        entryType:'Expense',
        amount: '0',
        isDateTimePickerVisible: false,
        title:"",
        datePicked: new Date(),
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      };
    
    // _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({datePicked:date})
        this._hideDateTimePicker();
    };
    
    onPress(txt) {
        console.log(txt);
    };
   
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.logs}>
                    <View>
                        <Text style={styles.log_text}>Create New Entry</Text>
                        <Text style={styles.log_subtext}>On Thursday, November 14</Text>
                    </View>
                   
                    <Button transparent noDefaultStyles={true}   onPress={() => {
                            this.setModalVisible(true);
                            }} title=">">
                        <Icon name="arrow-forward" size={30} color="#CCC" />
                    </Button>
                    <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {
                                alert('Modal has been closed.');
                                }}>
                           <FormEntry datePicked={this.state.datePicked}/>                                               

                                    <Button
                                            onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Hide Modal</Text>
                                    </Button>
                             
                    </Modal>
              
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:22,
    },
    logs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderColor: '#F5F5F5',
        borderBottomWidth: 1
    },
    log_text: {
        fontSize: 25
    },
    log_subtext: {
        fontSize: 18
    }
});