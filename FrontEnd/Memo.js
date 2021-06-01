import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import List from './List'

export default function Memo() {
    const [message, setMessage] = useState([]);
    const [text, setText] = useState("");
    const [update, setUpdate] = useState(false);
    const memoRef = useRef();
    useEffect(() => {
        fetch("https://de4e0a82449c.ngrok.io/api/memo")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setMessage(myJson);
                console.log(JSON.stringify(myJson));
            })
    }, [update])

    const OkButton = () => {
        fetch("https://de4e0a82449c.ngrok.io/api/memo", {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                content: text,
                complete:false               
            })
        }).then(function () {
            setText('');
            setUpdate((update) => !update);
            memoRef.current.clear();
        })
    }
    const Answer = (data) => {
        setUpdate(data);
    }
    return (
        <View >
            <View style={styles.Header}>
                <Text style={{
                    fontSize: 30, marginBottom: 10, color:'skyblue'
                }}>Memo</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.memo}
                        ref={memoRef}
                        multiline={false}
                        onSubmitEditing={() =>OkButton()}
                        onChangeText={(text) => setText(text)}></TextInput>
                    <Button title={'OK'}
                        onPress={() => OkButton()}
                />
                </View>

                <View>
                    {message.map((obj) => { return (<List key={obj.id} id={obj.id} checked={obj.complete} listText={obj.content} answerFunction={Answer} update={update}/>) })}
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
        width:310,
        height: 50,
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