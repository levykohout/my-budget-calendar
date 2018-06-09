import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Icon, Container,Button,Content} from 'native-base';

export default class Logs extends React.Component {
    onPress(txt) {
        console.log(txt);
    };
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.logs}>
                    <View>
                        <Text style={styles.log_text}>Create New Entry</Text>
                        <Text style={styles.log_subtext}>On Thursday, November 14</Text>
                    </View>
                    <Button transparent noDefaultStyles={true} onPress={() => this.onPress.bind(this)} title=">">
                        <Icon name="arrow-forward" size={30} color="#CCC" />
                    </Button>
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
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