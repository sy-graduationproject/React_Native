import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const List = ({ checked, listText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={checked ? styles.checked : styles.unchecked}>
                    <Ionicons name="ios-checkmark" size={30} color='#FFFFFF' />
                </TouchableOpacity>
                <Text style={styles.listText}>{listText}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listText: {
        color: '#424242',
        fontSize: 16,
        flexDirection: 'row',

    },
    list: {
        flexDirection: 'row',
        padding: 10,
    },
    checked: {
        borderRadius: 14,
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        backgroundColor: '#3478f6',
    },
    unchecked: {
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    }
});
export default List;