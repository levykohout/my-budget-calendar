import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Button,Icon } from 'native-base';
import EventEmitter from 'EventEmitter';
export default class CalendarDays extends React.Component {
    constructor(props){
        super(props);
        this.handleSelectDay = this.handleSelectDay.bind(this);
    state = {
      selectedDay:this.props.selectedDay,
      selectedMonth: this.props.selectedMonth,
      selectedYear: this.props.selectedYear,
      };
    }
  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  eventEmitter = new EventEmitter();
      componentDidMount() {
        //this.eventEmitter = new EventEmitter();
          if(typeof this.props.onEmitterReady === 'function') {
              this.props.onEmitterReady(this.eventEmitter);
          }
        
         // this.eventEmitter.emit('day-change', { day:this.state.selectedMonth});
        }
  
    renderWeeks() {
        let past_month_days = range(this.getPastMonthLowRange(),  (this.pastMonthNumberofDays()+1));
        let this_month_days = range(1, (this.selectedMonthNumberofDays()+1));
     
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

    //gets the low range of previous month by getting it's last day - day of the week of next month
    getPastMonthLowRange(){
      return (this.pastMonthNumberofDays() - (this.getDayOfWeek()-1));
    };

    pastMonthNumberofDays(){
        return this.getDaysInMonth(this.getPastMonthIndex(),this.props.selectedYear)
    }
    selectedMonthNumberofDays(){
        return this.getDaysInMonth(this.getMonthIndex(),this.props.selectedYear)
    }
    //gets day of the week for the first day of selected month and year month index zero based, get day zero based
    //new Date(year, monthIndex, day)
    getDayOfWeek(){
        return((new Date(this.props.selectedYear,this.getMonthIndex(), 1)).getDay());
    };
    getMonthIndex(){
        return this.months.indexOf(this.props.selectedMonth);
    };
    getPastMonthIndex(){
        return ((this.months.indexOf(this.props.selectedMonth))-1);
    }
    //gets the number of days in the month by getting the date of the day before the next month.
    getDaysInMonth(month,year){
        return ((new Date(year, (month+1), 0)).getDate());
    };
    getDaysInPreviousMonth(month,year){
        return ((new Date(year, (month+1), 0)).getDate());
    };
    getWeeksArray(days) {
        var weeks_r = [];
        var seven_days = [];
        var count = 0;
        days.forEach((day,index) => {
          count += 1;
          seven_days.push(day);
          if(count == 7){
            weeks_r.push(seven_days)
            count = 0;
            seven_days = [];
          }
          //if last item in days
        //    if(index==days.length-1){
        //     weeks_r.push(seven_days);
        //     count = 0;
        //     seven_days = [];
        //   }
        });
        return weeks_r;
    };
    handleSelectDay(day){
        this.setState((prevState,props)=>{return{selectedDay:day}},() =>  this.eventEmitter.emit('day-change', {day: this.state.selectedDay}))
     
    }
    renderDays(week_days) {
        return week_days.map((day, index) => {
            return (
                <Button      
                    transparent            
                    label= {day}
                    key={index} 
                    onPress={() => this.handleSelectDay(day)} 
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
    handlePress = async () => { 
        fetch('https://data.advance88.hasura-app.io/v1/query', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "type": "select",
          "args": {
              "table": "author",
              "columns": [
                  "name"
              ],
              "limit": "1"
          }
            })
      })
          .then((response) => response.json())
          .then((responseJson) => {
       Alert.alert("Author name at 0th index:  " + responseJson[0].name);
          })
          .catch((error) => {
            console.error(error);
          });
      }
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