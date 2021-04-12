import React, { useState }from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Memo() {
    const [checked, setChecked] = useState(true);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:30}}> Memo</Text>
            </View>
            <View style={styles.memo}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={checked ? styles.checked : styles.unchecked}>
                    <Ionicons name="ios-checkmark" size={30} color='#FFFFF' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        marginBottom: 30,
        flexDirection:'row',
        justifyContent:'center',
    },
    memo: {
        marginLeft: 30
    },
    checked: {
        borderRadius: 14,
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        backgroundColor: '#3478f6'
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