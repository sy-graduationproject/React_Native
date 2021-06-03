import React,{useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView, Modal, Pressable} from 'react-native';
import * as Font from 'expo-font';
import Material from './Material';
import Loading from './Loading';

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [file, setFile] = useState([]);

    const getMaterial = async () => {
        await fetch("https://77aab304d7ea.ngrok.io/ml")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setFile(myJson);
                setIsLoading(false);
            })
    }
    useEffect(() => {
        getMaterial();
    }, []);

    const onRecipe = () => {
        
    }
    return (
        isLoading ?
            <Loading/>
            :
            <Material data={file}/>
        
                        
    );
}

const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        // backgroundColor: 'white',
        borderColor:'skyblue',
        margin: 20,
        flex: 1,
        alignContent: 'center',
        alignItems:'center'
    },
    r: {
        flexDirection: 'row',
    },
    c: {
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        height: 80,
        width:80,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
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

export default Home;