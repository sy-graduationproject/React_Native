import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView, Modal, Pressable, Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Material = ({ data }) => {
    const [cabbage, setCabbage] = useState(data[0].cabbage);    
    const [onion, setOnion] = useState(data[0].onion);
    const [orange, setOrange] = useState(data[0].orange);
    const [cucumber, setCucumber] = useState(data[0].cucumber);
    const [egg, setEgg] = useState(data[0].egg);
    const [carrots, setCarrots] = useState(false);
    const [beef, setBeef] = useState(false);
    const [strawberry, setStrawberry] = useState(false);
    const [blueberry, setBlueberry] = useState(false);
    const [shrimp, setShrimp] = useState(false);
    const [trout, setTrout] = useState(false);
    const [kale, setKale] = useState(false);
    const [macadamia, setMacadamia] = useState(false);
    const [broccoli, setBroccoli] = useState(false);
    const [tomatoes, setTomatoes] = useState(false);
    const [banana, setBanana] = useState(false);
    const [oat, setOat] = useState(false);
    const [pepper, setpepper] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [update, setUpdate] = useState();
    
    const [name, setName] = useState('');
    const [food, setFood] = useState('');
    const [material, setMaterial] = useState('');
    const [seq, setSeq] = useState('');
    const [link, setLink] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [count, setCount] = useState(0);

    const onReload = () => {
        setIsLoading(true);
        setUpdate(!update);
        setCount(0);
    }

    useEffect(() => {
         fetch("https://151f5a1e8372.ngrok.io/ml")

            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setOnion(myJson[0].onion);
                setCabbage(myJson[0].cabbage);
                setOrange(myJson[0].orange);
                setCucumber(myJson[0].cucumber);
                setEgg(myJson[0].egg);
                setCount(50);
                setIsLoading(false);
            })
    }, [update]);

    useEffect(() => {
        if(count>=50) return;
        const t = setTimeout(() => setCount(count+1), 1500);
        setLoad(!load);

        return () => clearTimeout(t);
    }, [count]);

    const onRecipe = (id) => {
        fetch("https://151f5a1e8372.ngrok.io/api/recipe/" + id)

            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setName(myJson.name);
                setFood(myJson.food);
                setMaterial(myJson.material);
                setSeq(myJson.seq);
                setLink(myJson.link);
            })
        setModalVisible(true);
    }

    return (
        isLoading ?
            <View>
                <View style={styles.LoadingView}>
                {
                    load ?
                        <>
                            <Image source={require('./assets/refrigerator1.png')} resizeMode='contain' style={styles.image1} />
                            <Text style={styles.text}>Loading.</Text>
                        </>
                        :
                        <>
                            <Image source={require('./assets/refrigerator2.png')} resizeMode='contain' style={styles.image1} />
                            <Text style={styles.text}>Loading..</Text>
                        </>
                }
                </View>
            </View>
            :
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Ionicons name="reload" size={30} color="skyblue" onPress={() => onReload()} style={{ marginTop: 10 }} />
                </View>
                <View>
                    <View style={styles.c}>
                        <View style={styles.r}>
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
                                        <Text style={styles.modalText}>{food}</Text>
                                        <Text style={styles.modalText}>{material}</Text>
                                        <Text style={styles.modalText}>{seq}</Text>
                                        <Text style={styles.modalText}>{link}</Text>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyle}>Hide Modal</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => onRecipe(1)}
                            >
                                {
                                    cabbage ?
                                        <>
                                            <Image source={require('./assets/cabbage.png')} resizeMode='contain' style={styles.image} onPress={() => onRecipe()} />
                                            <Text >cabbage</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    onion ?
                                        <>
                                            <Image source={require('./assets/onion.png')} resizeMode='contain' style={styles.image} />
                                            <Text >onion</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    orange ?
                                        <>
                                            <Image source={require('./assets/orange.png')} resizeMode='contain' style={styles.image} />
                                            <Text >orange</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.r}>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    egg ?
                                        <>
                                            <Image source={require('./assets/egg.png')} resizeMode='contain' style={styles.image} />
                                            <Text >egg</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    cucumber ?
                                        <>
                                            <Image source={require('./assets/cucumber.png')} resizeMode='contain' style={styles.image} />
                                            <Text >cucumber</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    carrots ?
                                        <>
                                            <Image source={require('./assets/carrots.png')} resizeMode='contain' style={styles.image} />
                                            <Text >carrots</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.r}>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    beef ?
                                        <>
                                            <Image source={require('./assets/beef.png')} resizeMode='contain' style={styles.image} />
                                            <Text >beef</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    strawberry ?
                                        <>
                                            <Image source={require('./assets/strawberry.png')} resizeMode='contain' style={styles.image} />
                                            <Text >strawberry</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    blueberry ?
                                        <>
                                            <Image source={require('./assets/blueberry.png')} resizeMode='contain' style={styles.image} />
                                            <Text >blueberry</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.r}>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    shrimp ?
                                        <>
                                            <Image source={require('./assets/shrimp.png')} resizeMode='contain' style={styles.image} />
                                            <Text >shrimp</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    trout ?
                                        <>
                                            <Image source={require('./assets/trout.png')} resizeMode='contain' style={styles.image} />
                                            <Text >trout</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    kale ?
                                        <>
                                            <Image source={require('./assets/kale.png')} resizeMode='contain' style={styles.image} />
                                            <Text >kale</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.r}>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    macadamia ?
                                        <>
                                            <Image source={require('./assets/macadamia-nut.png')} resizeMode='center' style={styles.image} />
                                            <Text >macadamia</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    broccoli ?
                                        <>
                                            <Image source={require('./assets/broccoli.png')} resizeMode='contain' style={styles.image} />
                                            <Text >broccoli</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    tomatoes ?
                                        <>
                                            <Image source={require('./assets/tomatoes.png')} resizeMode='contain' style={styles.image} />
                                            <Text >tomatoes</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.r}>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    banana ?
                                        <>
                                            <Image source={require('./assets/banana.png')} resizeMode='contain' style={styles.image} />
                                            <Text >banana</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    pepper ?
                                        <>
                                            <Image source={require('./assets/bell-pepper.png')} resizeMode='contain' style={styles.image} />
                                            <Text >bell-pepper</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                {
                                    oat ?
                                        <>
                                            <Image source={require('./assets/oat.png')} resizeMode='contain' style={styles.image} />
                                            <Text >oat</Text>
                                        </>
                                        :
                                        <>
                                            <Image source={require('./assets/empty.png')} resizeMode='contain' style={styles.image} />
                                        </>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView >
    )
}

const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        // backgroundColor: 'white',
        borderColor: 'skyblue',
        margin: 20,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
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
        width: 80,
    },
    image1: {
        height: 200,
        width: 200,
    },
    text: {
        fontSize : 26,
        marginTop: 20,
        textAlign: "center"
    },
    LoadingView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:250
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: 400,
        height:400,
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

export default Material;