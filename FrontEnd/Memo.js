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
        fetch("http://localhost:8080/api/memo")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setMessage(myJson);
                console.log(JSON.stringify(myJson));
            })
    }, [update])

    const OkButton = () => {
        fetch("http://localhost:8080/api/memo", {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                content: text,
                complete:false               
            })
        })
        message.concat()
        setText('');
        setUpdate((update) => !update);
        memoRef.current.clear();
    }
    return (
        <View >
            <View style={styles.Header}>
                <Text style={{
                    fontSize: 30, marginBottom: 10
                }}>Memo</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.memo}
                        ref={memoRef}
                        onChangeText={(text) => setText(text)}
                        onKeyPress={(e) => {if(e.key=='Enter') OkButton()}}></TextInput>
                    <Button title={'OK'}
                        onPress={() => OkButton()}
                />
                </View>

                <View>
                    {message.map((obj) => { return (<List key={obj.id} id={obj.id} checked={obj.complete} listText={obj.content} />) })}
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