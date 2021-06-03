import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Modal, Pressable } from 'react-native';

const QnaList = ({name, question, answer}) => {
    return (
        <View style ={styles.item}>
            <Text style={styles.title}>{question}</Text>
            <Text style={styles.answer}>{answer}</Text>
            <Text >{name}</Text>
        </View>
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
        fontSize: 29,
    },
    answer: {
        
    }
})

export default QnaList;