import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Icon, Container,Button,Content} from 'native-base';

export default class Header extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header_item}>
                        <Text style={[styles.header_text,styles.text_left, styles.bold_text]}> Menu</Text>
                    </View>
                    <View style={styles.header_item}>
                        <Text style={[styles.header_text, styles.text_center, styles.bold_text]}>Calendar</Text>
                    </View>
                    <View style={styles.header_item}>
                        <Text style={[styles.header_text, styles.text_right, styles.bold_text]}>Today</Text>
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
    header: {
        backgroundColor: '#329BCB',
        flexDirection: 'row',
        paddingRight:20,
    },
    header_item: {
        flex: 1
    },
    header_button: {
        flexDirection: 'row'
    },
    text_center: {
        textAlign: 'center'
    },
    text_right: {
        textAlign: 'right'
    },
    text_left: {
        textAlign: 'left'
    },
    header_text: {
        color: '#fff',
        fontSize: 20
    },
    bold_text: {
        fontWeight: 'bold'
    },
});