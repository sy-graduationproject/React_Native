import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView, Modal, Pressable } from 'react-native';

const QnaList = ({name, question, answer}) => {
    return (
        <View style ={styles.container}>
            <Text> {name}</Text>
            <Text>{question}</Text>
            <Text>{answer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default QnaList;