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


export default class CalendarScreen extends React.Component {
    static navigationOptions = {
        headerTitle:<Header/>
    };
   
    render() {
        const days=[];
        const month = {
            Name:'June',
            numberOfDays:30,
        };
        for(let i=0; i < month.numberOfDays; i++){
            days.push(<Cell key={i+1}></Cell>)
        }
      return (
        <ScrollView style={styles.container}>
            <CalendarHeader/>
            <WeekDays/>
            <CalendarDays/>
            <Notes/>
            <Logs/>
        </ScrollView>
      );
    }
  }

 
  const styles = StyleSheet.create({
    cell: {
      flex:0,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor: '#F3D1B0',
     },
     container: {
        flex: 1
    },    
  });