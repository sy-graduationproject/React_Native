import React,{useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView, Modal, Pressable} from 'react-native';
import * as Font from 'expo-font';
import Material from './Material';

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [file, setFile] = useState([]);
    const [load, setLoad] = useState(false);
    const [count, setCount] = useState(0);

    const getMaterial = async () => {
        await fetch("https://e9553528b648.ngrok.io/ml")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setFile(myJson);
                setCount(50);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getMaterial();
    }, [])

    useEffect(() => {
        if(count>=50) return;
        const t = setTimeout(() => setCount(count+1), 1500);
        setLoad(!load);

        return () => clearTimeout(t);
    }, [count]);

    return (
        isLoading ?
            <View>
                <View style={styles.LoadingView}>
                {
                    load ?
                        <>
                            <Image source={require('./assets/refrigerator1.png')} resizeMode='contain' style={styles.image} />
                            <Text style={styles.text}>Loading.</Text>
                        </>
                        :
                        <>
                            <Image source={require('./assets/refrigerator2.png')} resizeMode='contain' style={styles.image} />
                            <Text style={styles.text}>Loading..</Text>
                        </>
                }
                </View>
            </View>
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
        height: 200,
        width: 200,
    },
    LoadingView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:250
    },
    text: {
        fontSize : 26,
        marginTop: 20,
        textAlign: "center"
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