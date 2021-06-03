import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Modal, Pressable } from 'react-native';
import QnaList from './QnaList';


const QnA = () => {
    const [qna, setQna] = useState([]);
    const renderItem = ({item}) => (
        <QnaList name={item.name} question={item.question} answer={item.answer} />
    );
    useEffect(() => {
        fetch("https://8dab085c8fc4.ngrok.io/api/qna")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setQna(myJson);
            })
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.TContainer}>
                <Text style={styles.Title}>QnA</Text>
            </View>
            <FlatList
                data={qna}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
//{qna.map((obj) => { return (<QnaList key={obj.id} obj={obj}name = { obj.name } question={obj.question} answer={obj.answer}/> )})}


const styles = StyleSheet.create({
    container: {
        flexDirection:'column'
    },
    TContainer: {
        alignItems:'center'
    },
    Title: {
        fontSize: 40
        
    }
});

export default QnA;