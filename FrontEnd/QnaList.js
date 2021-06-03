import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Modal, Pressable } from 'react-native';

const QnaList = ({ name, question, answer }) => {
    const [A, seta] = useState(answer);
    useEffect(() => {
        if (A == "")
            seta("...")
    },[])
    return (
        <ScrollView>
            <View style={styles.item}>
                <Text style={styles.title}>Q : {question}</Text>
                <Text style={styles.answer}>A : {A}</Text>
                <View style={{ alignItems: 'flex-end' }}>
                    <Text>{name}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        color:'white'
    },
    answer: {
        fontSize: 20,
        color: 'white'
    }
})

export default QnaList;