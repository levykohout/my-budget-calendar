import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { range } from 'lodash';
import {Icon, Container,Button,Content} from 'native-base';

export default class Categories extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.notes}>
                    <View style={styles.notes_notes}>
                        <Text style={styles.notes_text}>Auto</Text>
                        <View style={styles.inline}>
                        <Icon name="bicycle" size={20} color="#CCC" />  
                        </View>
                    </View>
                    <View style={styles.notes_notes}>
                        <Text style={styles.notes_text}>Home Mortgage</Text>
                        <View style={styles.inline}>
                        <Icon name="bicycle" size={20} color="#CCC" />  
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    notes: {
        marginTop: 10,
        padding: 20,
        borderColor: '#F5F5F5',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        backgroundColor: '#FAFAFA'
    },
    notes_notes: {
        flex: 3
    },
    notes_text: {
        fontSize: 18
    },
    notes_selected_date: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column'
    },
    small_text: {
        fontSize: 15
    },
    big_text: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
});