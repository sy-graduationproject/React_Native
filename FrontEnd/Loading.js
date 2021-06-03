import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView, Modal, Pressable, TextComponent, SliderComponent } from 'react-native';

export default Loading = () => {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        let i = 0;
        while(i<5) {
            async () => {
                await setTimeout(() => {
                    console.log(load);
                }, 1000)
                i++;
            }
        }
    }, [])


    return (
        <View>
            <View style={styles.centeredView}>
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
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
    },
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:250
    },
    text: {
        fontSize : 26,
        marginTop: 20,
        textAlign: "center"
    }
});