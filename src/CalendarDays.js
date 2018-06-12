import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Button,Icon } from 'native-base';

export default class CalendarDays extends React.Component {
    constructor(props){
        super(props)
    state = {
      selectedDay:'',
      selectedMonth: this.props.selectedMonth,
      selectedYear: this.props.selectedYear,
      };
    }
      months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
    renderWeeks() {
        let past_month_days = range(this.getPastMonthLowRange(),  this.getDaysInMonth(this.getPastMonthIndex(),this.props.selectedYear));
        let this_month_days = range(1, this.getDaysInMonth(this.getMonthIndex(),this.props.selectedYear));
     
        let days = past_month_days.concat(this_month_days);
        let grouped_days = this.getWeeksArray(days);
     
        return grouped_days.map((week_days, index) => {
            return (
                <View key={index} style={styles.week_days}>
                    { this.renderDays(week_days) }  
                </View>
            );
        });
    };
    getPastMonthLowRange(){
      return (this.getDaysInMonth(this.getPastMonthIndex(),this.props.selectedYear) - this.getDayOfWeek());
    };
    getDayOfWeek(){
        return( (new Date(this.props.selectedYear,this.getPastMonthIndex(), 1)).getDay());
    };
    getMonthIndex(){
        return(this.months.indexOf(this.props.selectedMonth))
    };
    getPastMonthIndex(){
        return(this.months.indexOf(this.props.selectedMonth)-1)
    }

    getDaysInMonth(month,year){
        return ((new Date(year, month+1, 0)).getDate());
    };
    getWeeksArray(days) {
        var weeks_r = [];
        var seven_days = [];
        var count = 0;
        days.forEach((day) => {
          count += 1;
          seven_days.push(day);
          if(count == 7){
            weeks_r.push(seven_days)
            count = 0;
            seven_days = [];
          }
        });
        return weeks_r;
    };

    renderDays(week_days) {
        return week_days.map((day, index) => {
            return (
                <Button      
                    transparent            
                    label= {day}
                    key={index} 
                    onPress={() => this.setState({selectedDay: day.toString()})} 
                    style={styles.day}
                    noDefaultStyles={true}
                    title={day.toString()}> 
                    <Text style={styles.day_text}>{day.toString()}</Text>
                </Button>
            );
        });
    };
    onPress(txt) {
        console.log(txt);
    };
    onDayClicked(day) {
        
    };
    render() {
        return (
            <View style={styles.calendar_days}>
            {/* <Text>Selected Day: {this.state.selectedDay}</Text> */}
                { this.renderWeeks() }
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    calendar_days:{
     // flex: 1,
     //flexDirection: 'row'
        
    },
    week_days: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    day: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
         margin: 2,
        },
    day_text: {
        textAlign: 'center',
        color: '#A9A9A9',
        fontSize: 20
    },
});