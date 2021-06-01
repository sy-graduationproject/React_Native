import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Home = () =>{
    const onSubmit = () => {
        fetch("http://localhost:8080/api/memo")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setMessage(myJson);
                console.log(JSON.stringify(myJson));
            })
    }
    return (
        <ScrollView>
            <View style={{alignItems:'center'}}>
                <Ionicons name="reload" size={30} color="skyblue" onPress={() => onSubmit()} style={{marginTop:10}} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.c}>
                    <View style={styles.r}>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/cabbage.png')} resizeMode='contain' style={styles.image}/>
                            <Text >cabbage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/carrots.png')} resizeMode='contain' style={styles.image} />
                            <Text>carrots</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/cucumber.png')} resizeMode='contain' style={styles.image} />
                            <Text>cucumber</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.r}>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/egg.png')} resizeMode='contain' style={styles.image} />
                            <Text>egg</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/beef.png')} resizeMode='contain' style={styles.image}/>
                            <Text>beef</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/onion.png')} resizeMode='contain' style={styles.image}/>
                            <Text>onion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.r}>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/orange.png')} resizeMode='contain' style={styles.image} />
                            <Text>orange</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/strawberry.png')} resizeMode='contain' style={styles.image} />
                            <Text>strawberry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/blueberry.png')} resizeMode='contain' style={styles.image} />
                            <Text>blueberry</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.r}>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/shrimp.png')} resizeMode='contain' style={styles.image} />
                            <Text>shrimp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/trout.png')} resizeMode='contain' style={styles.image} />
                            <Text>trout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/kale.png')} resizeMode='contain' style={styles.image} />
                            <Text>kale</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.r}>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/macadamia-nut.png')} resizeMode='contain' style={styles.image} />
                            <Text>macadamia-nut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/broccoli.png')} resizeMode='contain' style={styles.image} />
                            <Text>broccoli</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/tomatoes.png')} resizeMode='contain' style={styles.image} />
                            <Text>tomatoes</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.r}>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/banana.png')} resizeMode='contain' style={{ flex: 1 }} />
                            <Text>banana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/bell-pepper.png')} resizeMode='contain' style={{ flex: 1 }} />
                            <Text>bell-pepper</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                        ><Image source={require('./assets/oat.png')} resizeMode='contain' style={{ flex: 1 }} />
                            <Text>oat</Text>
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
        margin:20,
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
    }
});

export default Home;