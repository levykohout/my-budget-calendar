import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Icon,Button} from 'native-base';
import EventEmitter from 'EventEmitter';

export default class CalendarHeader extends React.Component {
   date = new Date();
   months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
   eventEmitter = new EventEmitter();
    state = {
        selectedMonth : this.months[this.date.getMonth()],
        selectedYear : this.date.getFullYear(),
    };
    componentWillMount() {
     

        if(typeof this.props.onEmitterReady === 'function') {
            this.props.onEmitterReady(this.eventEmitter);
        }
      
     this.eventEmitter.emit('month-change', { month:this.state.selectedMonth});
      }

    getNextMonth(){
        var index = this.months.indexOf(this.state.selectedMonth)
         //check index if last of the month
        if(index === 11){
            this.setState({selectedMonth:this.months[0]})
            this.setState({selectedYear:(this.state.selectedYear + 1)});
        } 
        else{
            var newIndex = index + 1;   
            this.setState({selectedMonth:this.months[newIndex]},()=>  this.eventEmitter.emit('month-change', {month: this.state.selectedMonth}))
        }
        // this.eventEmitter.emit('month-change', {month: this.state.selectedMonth});
    };
    getPreviousMonth(){
        var index = this.months.indexOf(this.state.selectedMonth)
        //check index if first of the month
        if(index === 0){
            this.setState({selectedMonth:this.months[11]}, ()=>  this.eventEmitter.emit('month-change', {month: this.state.selectedMonth}))
            this.setState({selectedYear:(this.state.selectedYear - 1)}, () => this.eventEmitter.emit('year-change', {year:this.state.selectedYear}));
        } 
        else{
            var newIndex = index - 1;
            this.setState({selectedMonth:this.months[newIndex]}, () =>  this.eventEmitter.emit('month-change', {month: this.state.selectedMonth}))
        }

    };

    getNextYear(){
        //check for leap year
        this.setState({selectedYear:(this.state.selectedYear + 1)},() => this.eventEmitter.emit('year-change', {year:this.state.selectedYear}));
        //this.eventEmitter.emit('year-change', {year:this.state.selectedYear});
    }

    getPreviousYear(){
        //check for leap year
        this.setState({selectedYear:(this.state.selectedYear - 1)},() => this.eventEmitter.emit('year-change', {year:this.state.selectedYear}));
       // this.eventEmitter.emit('year-change', {year:this.state.selectedYear});
    }

    render() {
    
        return (
            <ScrollView style={styles.container}>
               <View style={styles.calendar_header}>
                    <View style={styles.calendar_header_item}>
                        <Button transparent noDefaultStyles={true} onPress={() => this.getPreviousYear()} title="<">
                            <Icon name="arrow-back" size={18} color="#333" />
                        </Button>
                        <Text style={styles.calendar_header_text}>{this.state.selectedYear}</Text>
                        <Button transparent noDefaultStyles={true} onPress={() => this.getNextYear()} title=">">
                            <Icon name="arrow-forward" size={18} color="#333" />
                        </Button>
                    </View>
     
                    <View style={styles.calendar_header_item}>
                        <Button transparent noDefaultStyles={true} onPress={() => this.getPreviousMonth()} title="<">
                            <Icon name="arrow-back" size={18} color="#333" />
                        </Button>
                        <Text style={styles.calendar_header_text}>{this.state.selectedMonth}</Text>
                        <Button transparent noDefaultStyles={true} onPress={() => this.getNextMonth()} title=">">
                            <Icon name="arrow-forward" size={18} color="#333" />
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    calendar_header: {
        flexDirection: 'row',
        paddingRight: 40,
        justifyContent: 'space-between',
    },
    calendar_header_item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingRight: 40,
        paddingLeft: 40
    },
    calendar_header_text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

