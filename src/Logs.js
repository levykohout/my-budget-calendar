import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableHighlight,TouchableOpacity,TextInput,Animated,
    Dimensions, TouchableWithoutFeedback} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Icon, Container,Button,Content, Header,Picker,Title, Right, Body, Left} from 'native-base';

import { Form, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import FormEntry from'./FormEntryModal';
const { width, height } = Dimensions.get('window');
export default class Logs extends React.Component {
    
    state = {
        popupIsOpen: false,
        entryType:'Expense',
        amount: '0',
        isDateTimePickerVisible: false,
        title:"",
        };
    // on update of props query entries for the selected day the display
      openMovie = (movie) => {
        this.setState({
          popupIsOpen: true,
          movie,	
        });
      }
      closeMovie = () => {
        this.setState({
          popupIsOpen: false,
        });
      }
  
    render() {
         
        return (
            <ScrollView style={styles.container}>
                <View >
                     {/* add display of entries for the selected day                */}
                    <Button  rounded success noDefaultStyles={true}   onPress={this.openMovie } title=">" style={styles.textright}>
                        <Icon  success  large name="ios-add-circle-outline" size={30} color="#CCC" />
                    </Button>
                        <FormEntry 
                            datePicked = { this.props.datePicked}
                            selectedYear = {this.props.selectedYear}
                            selectedMonth = {this.props.selectedMonth}
                            isOpen={this.state.popupIsOpen}
                            onClose={this.closeMovie}/>                
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
  flex:1,
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
    },
    textright: {    
        alignSelf: 'flex-end',  
      },
});