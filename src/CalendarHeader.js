import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Icon,Button} from 'native-base';

export default class CalendarHeader extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
               <View style={styles.calendar_header}>
                    <View style={styles.calendar_header_item}>
                        <Button transparent noDefaultStyles={true} onPress={() => this.onPress.bind(this)} title="<">
                            <Icon name="arrow-back" size={18} color="#333" />
                        </Button>
                        <Text style={styles.calendar_header_text}>2013</Text>
                        <Button transparent noDefaultStyles={true} onPress={() => this.onPress.bind(this)} title=">">
                            <Icon name="arrow-forward" size={18} color="#333" />
                        </Button>
                    </View>
     
                    <View style={styles.calendar_header_item}>
                        <Button transparent noDefaultStyles={true} onPress={() => this.onPress.bind(this)} title="<">
                            <Icon name="arrow-back" size={18} color="#333" />
                        </Button>
                        <Text style={styles.calendar_header_text}>November</Text>
                        <Button transparent noDefaultStyles={true} onPress={() => this.onPress.bind(this)} title=">">
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

