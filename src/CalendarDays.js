import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Button,Icon } from 'native-base';

export default class CalendarDays extends React.Component {
    renderWeeks() {
        let past_month_days = range(27, 31);
        let this_month_days = range(1, 30);
     
        let days = past_month_days.concat(past_month_days, this_month_days);
        let grouped_days = this.getWeeksArray(days);
     
        return grouped_days.map((week_days, index) => {
            return (
                <View key={index} style={styles.week_days}>
                    { this.renderDays(week_days) }              
                </View>
            );
        });
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
                <Button      transparent            label= {day}
                    key={index} 
                    onPress={() => this.onPress.bind(this)} 
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
    render() {
        return (
            <View style={styles.calendar_days}>
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