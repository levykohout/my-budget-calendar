import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableHighlight,TouchableOpacity,TextInput,Animated,
    Dimensions, TouchableWithoutFeedback,FlatList} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Icon, Container,Button,Content, Header,Picker,Title, Right, Body, Left} from 'native-base';

import { Form, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import FormEntry from'./FormEntryModal';
const { width, height } = Dimensions.get('window');
export default class Logs extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.renderEntries=this.renderEntries.bind(this);
    // }
    state = {
        popupIsOpen: false,
        entryType:'Expense',
        amount: '0',
        isDateTimePickerVisible: false,
        title:"",
        dataSource:[],
        filteredDay:[],
        };
    // on update of props query entries for the selected day the display
      openNewEntry(){
        this.setState({
          popupIsOpen: true,
        });
      }
      closeMovie = () => {
        this.setState({
          popupIsOpen: false,
        });
      }
  
      componentDidMount() {
       
       this.getEntries();
      }
      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.datePicked !== prevProps.datePicked) {
          this.renderEntries();
        }
      }
    //   shouldComponentUpdate(nextProps, nextState){

    //   }
    //   componentWillUnmount(){

    //   }
      getEntries(){
        var me=this;
        return fetch('http://192.168.1.3:3000/v1/entries.json')
        .then((response) => response.json())
        .then((responseJson) => {
            
           
          this.setState({
           dataSource: responseJson.entries,
          }, function(){
            me.renderEntries();
          }) 
        })
        .catch((error) =>{
          console.error(error);
        });
      }

    sameDay(entry, d2) {
        var d1 = new Date(entry.entryDate);
       return d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate();
         
      }
      renderEntries() {
         
           var day = new Date(this.props.selectedYear,this.props.selectedMonth, this.props.datePicked);
           console.log(day)
        var filter =[];
        this.state.dataSource.forEach((entry) => {
          
            if(this.sameDay(entry,day)){
                filter.push(entry);
            }
        })
        this.setState({
            filteredDay:filter
        }
    )
          console.log(this.state.filteredDay);
    
    };
    deleteItem(entry){
        console.log(entry)
        var me=this;
            return fetch('http://192.168.1.3:3000/v1/' + entry._id, {
              method: 'delete'
            })
            .then(response => {
                if(response.status==200){
                    me.getEntries();
                }
            }) 
            .catch((error) =>{
                console.error(error);
              });

        
    }
    
    render() {
         
        return (
            <ScrollView style={styles.container}>
              
                <View style={{flex: 1, paddingTop:20}}>
                    <FlatList
                        data={this.state.filteredDay}
                        renderItem={({item}) => 
                            <View style={styles.logs}>
                                <Text style={styles.log_text}>{item.title}  ${item.amount}</Text>
                                <Button transparent rounded light noDefaultStyles={true}   onPress={()=> this.deleteItem(item)} title=">" style={styles.removeButton}>
                                <Icon  name="ios-remove" />
                                </Button>
                            </View>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                    <Button  rounded  light noDefaultStyles={true}   onPress={()=>this.openNewEntry() } title=">" style={styles.textright}>
                        <Icon  name="ios-add" size={30} color="#CCC" />
                    </Button>
                        <FormEntry 
                            datePicked = { this.props.datePicked}
                            selectedYear = {this.props.selectedYear}
                            selectedMonth = {this.props.selectedMonth}
                            isOpen={this.state.popupIsOpen}
                            onClose={this.closeMovie}/>                
              
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
  flex:1,        
    },
    logs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderColor: '#F5F5F5',
        borderBottomWidth: 1
    },
    log_text: {
        fontSize: 16
    },
    log_subtext: {
        fontSize: 12
    },
    textright: {    
        alignSelf: 'flex-end',  
      },
      removeButton:{
        alignSelf: 'flex-end',  
      }
});