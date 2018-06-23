import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class CalendarCell extends React.Component {
   render() {
       return (
     <View style={styles.cell}>
         <Text>This is a cell</Text>
         </View>
      );
    }
  }

  const styles = StyleSheet.create({
    cell: {
        flex:0,
      width:'14.2%',
      backgroundColor: '#7AC36A',
      alignItems: 'center',
     justifyContent:'center',
     borderWidth:1,
    }

  });