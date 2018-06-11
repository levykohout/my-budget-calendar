import React from 'react';
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native';
import Cell from './CalendarCell';
import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import Header from './Header';
import CalendarHeader from './CalendarHeader';
import WeekDays from './WeekDays';
import CalendarDays from './CalendarDays';
import Notes from './Notes';
import Logs from './Logs';
import EventEmitter from 'EventEmitter';


export default class CalendarScreen extends React.Component {
 
    state={
        selectedMonth:'January',
        selectedYear:'2018',
    }
    static navigationOptions = {
        headerTitle:<Header/>
    };
     
      componentDidMount() {
        //this.eventEmitter = new EventEmitter();
        this.eventEmitter.addListener('month-change', this.monthChange.bind(this));
        this.eventEmitter.addListener('year-change', this.yearChange.bind(this));
    }
    monthChange(month){
        this.setState({
            selectedMonth: month.month
        });
    }
    yearChange(year){
        this.setState({
            selectedYear: year.year
        });
    }
   
    render() {
      
      return (
        <ScrollView style={styles.container}>
      
            <CalendarHeader onEmitterReady={(emitter) => this.eventEmitter = emitter} />
           <View style={styles.container}>
               <Text>{this.state.selectedMonth}</Text>
               </View>
         
            <WeekDays/>
            <CalendarDays/>
            <Notes/>
            <Logs/>
            <View style={styles.container}>
               <Text style={styles.log_text}>{this.state.selectedYear}</Text>
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