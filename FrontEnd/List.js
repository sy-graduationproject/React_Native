import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';


const List = ({ id, listText, answerFunction, update }) => {
    const [tag, setTag] = useState(update);
    const [edit, setEdit] = useState(false);
    const editing = useRef();
    const onClick = (id) => {
        const url = "https://8404b858648c.ngrok.io/api/memo/" + id;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function () {
                answerFunction((tag) => !tag);
        })
    }
    // const onUpdate = (id) => {
    //     setEdit((edit) => { !edit });
    //     editing.current.focus();
    // }
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <TextInput style={styles.listText} editable={false}>{listText}</TextInput>
                <View style={{ width: 200, alignItems: 'flex-end' }}>
                    <View style={{flexDirection:"row"}}>
                        <Entypo name="pencil" size={24} color="black" ref={editing} onPress={() => onUpdate(id)}/>
                        <Ionicons name="trash" size={24} color="black" onPress={() => onClick(id)} />
                    </View>
                </View>
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