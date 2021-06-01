import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView, Modal, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { useEffect } from 'react';

const Home = () => {
    const [cabbage, setCabbage] = useState(true);
    const [carrots, setCarrots] = useState(true);
    const [cucumber, setCucumber] = useState(true);
    const [egg, setEgg] = useState(true);
    const [beef, setBeef] = useState(true);
    const [onion, setOnion] = useState(true);
    const [orange, setOrange] = useState(true);
    const [strawberry, setStrawberry] = useState(true);
    const [blueberry, setBlueberry] = useState(true);
    const [shrimp, setShrimp] = useState(true);
    const [trout, setTrout] = useState(true);
    const [kale, setKale] = useState(true);
    const [macadamia, setMacadamia] = useState(true);
    const [broccoli, setBroccoli] = useState(true);
    const [tomatoes, setTomatoes] = useState(true);
    const [banana, setBanana] = useState(true);
    const [oat, setOat] = useState(true);
    const [pepper, setpepper] = useState(true);
    const [update, setUpdate] = useState(true);
    const [modalVisible, setModalVisible] = useState(true);
    useEffect(() => {
        fetch("https://de4e0a82449c.ngrok.io/api/memo")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {

            })
    }, [update]);

    const onReload = () => {
        setUpdate(update => !update);
    }

    const onRecipe = () => {
        
    }
    return (
        <ScrollView>
            <View style={{alignItems:'center'}}>
                <Ionicons name="reload" size={30} color="skyblue" onPress={() => onReload()} style={{marginTop:10}} />
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
                                    <Text style={styles.modalText}>Hello World!</Text>
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
                                onPress={() => setModalVisible(true)}
                        >
                            {
                                cabbage ?
                                <>
                                        <Image source={require('./assets/cabbage.png')} resizeMode='contain' style={styles.image} onPress={()=> onRecipe() }/>
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
                                beef?
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
                    </View>
                    <View style={styles.r}>
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
        </ScrollView>
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