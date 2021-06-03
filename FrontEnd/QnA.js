import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, ScrollView, Modal, Pressable, TouchableOpacity } from 'react-native';
import QnaList from './QnaList';
import { AntDesign } from '@expo/vector-icons';


const QnA = () => {
    const [qna, setQna] = useState([]);
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [update, setUpdate] = useState(false);
    const memoRef = useRef();


    const renderItem = ({item}) => (
        <QnaList key={item.id} name={item.name} question={item.question} answer={item.answer} />
    );
    const OkButton = () => {
        fetch("https://8dab085c8fc4.ngrok.io/api/qna", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                question : text,
                answer: ""
            })
        }).then(function () {
            setText('');
            setName('');
            setUpdate((update) => !update);
            memoRef.current.clear();
            setModalVisible(!modalVisible);
        })
    }
    useEffect(() => {
        fetch("https://8dab085c8fc4.ngrok.io/api/qna")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setQna(myJson);
            })
    }, [update]);
    return (
        <View style={styles.container}>
            <View style={styles.TContainer}>
                <Text style={styles.Title}>QnA</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ alignItems: 'center' }}>
                            <TextInput style={styles.memo}
                                ref={memoRef}
                                multiline={true}
                                onChangeText={(text) => setText(text)}></TextInput>
                            <TextInput style={{ backgroundColor: '#E5E5E5',width:80, height:30 }}
                                ref={memoRef}
                                multiline={true}
                                placeholder="이름"
                                onChangeText={(name) => setName(name)}></TextInput>
                            <Button title={'OK'}
                                onPress={() => OkButton()} />
                        </View>
                        <Button title={'Close'}
                            onPress={() => setModalVisible(!modalVisible)} />
                    </View>
                </View>
            </Modal>
            <View style={{ alignItems: 'center' , marginBottom:10}}>
                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                    <AntDesign name="pluscircle" size={24} color="blue" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={qna}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection:'column'
    },
    TContainer: {
        alignItems:'center'
    },
    Title: {
        fontSize: 40
        ,marginBottom:10
    },
    memo: {
        backgroundColor: '#E5E5E5',
        width: 350,
        height: 200,
        marginBottom:10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: 400,
        height: 380,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default QnA;