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
   
    date=new Date();
     months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    state={
        
        months:this.months,
        selectedMonth : this.months[(new Date()).getMonth()],
        selectedYear : (new Date()).getFullYear(),
        selectedDay:(new Date()).getDate(),
    }
    static navigationOptions = {
        headerTitle:<Header/>
    };
     
      componentDidMount() {
        this.eventEmitter.addListener('month-change', this.monthChange.bind(this));
        this.eventEmitter.addListener('year-change', this.yearChange.bind(this));
        this.eventEmitter.addListener('day-change', this.dayChange.bind(this));
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
   dayChange(day){
    this.setState({
        selectedDay:day.day
    });
   }
    render() {
      
      return (
        <ScrollView style={styles.container}>
            <CalendarHeader onEmitterReady={(emitter) => this.eventEmitter = emitter} />
            <WeekDays />
            <CalendarDays 
                selectedMonth={this.state.selectedMonth} 
                selectedYear = {this.state.selectedYear}
                selectedDay ={this.state.selectedDay}
                onEmitterReady={(emitter) => this.eventEmitter = emitter} 
                months ={this.state.month}/>
            <Logs 
                datePicked={this.state.selectedDay} 
                selectedMonth = {this.months.indexOf(this.state.selectedMonth)}
                selectedYear = {this.state.selectedYear}
                />
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