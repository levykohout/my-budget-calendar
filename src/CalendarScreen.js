import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Cell from './CalendarCell';


export default class CalendarScreen extends React.Component {
    static navigationOptions = {
        title:'Calendar',
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
          <View>
        <Text>{month.Name}</Text>
        <View style={styles.cell}>
            
         {days.map(cell =>{return cell })}
         </View>
         </View>
      );
    }
  }
  const styles = StyleSheet.create({
    cell: {
      flex:0,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor: '#F3D1B0',
     }

  });