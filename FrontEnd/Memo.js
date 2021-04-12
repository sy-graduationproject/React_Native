import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Memo() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Memo</Text>
            <View style = {styles.memo}>
                <TouchableOpacity
                activeOpacity={0.7}>
                    <Ionicons name="ios-checkmark" size={30} color='#FFFFF'/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection:'row',
        justifyContent: 'center',
    },
    header: {
        fontSize: 25,
    },
    memo: {
        
    }
});