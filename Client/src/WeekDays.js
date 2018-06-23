import React from 'react';
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';

export default class WeekDays extends React.Component {
    renderWeekDays() {
        let weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        return weekdays.map((day) => {
            return (
                <Text key={day} style={styles.calendar_weekdays_text}>{day.toUpperCase()}</Text>
            );
        });
    };
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.calendar_weekdays}>
                    { this.renderWeekDays() }
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    calendar_weekdays:{
        flexDirection: 'row',
    },
    calendar_weekdays_text: {
        flex: 1,
        color: '#C0C0C0',
        textAlign: 'center'
    },
});