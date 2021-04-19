import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import List from './List'

export default function Memo() {
    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/memo")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setMessage(myJson);
                console.log(JSON.stringify(myJson));
            })
    }, [])

    const DeleteButton1 = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}>
                <Iconicons name="ios-trash" size={24} color="black" />
            </TouchableOpacity>
        )
    }
    return (
        <View >
            <View style={styles.Header}>
                <Text style={{
                    fontSize: 30, marginBottom: 10
                }}>Memo</Text>
                <TextInput style={styles.memo}></TextInput>
                <View>
                    {message.map((obj) => { return (<List id={obj.id} checked={obj.complete} listText={obj.content} />) })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    memo: {
        backgroundColor: '#E5E5E5',
        width: 350,
        height: 200,
    },
    Header: {
        marginTop: 26,
        marginBottom: 16,
        marginLeft: 16,
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
});