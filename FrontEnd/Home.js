import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.c}>
                <View style={styles.r}>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.r}>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.r}>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.r}>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.r}>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    ><Text>Cucumber</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Button
                title="Reload"
                onPress={() => onSubmit()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        backgroundColor: 'skyblue',
        color: 'white',
        margin:20,
        alignItems:'center'
    },
    r: {
        flexDirection: 'row',
    },
    c: {
        flexDirection: 'column',
    }
});

export default Home;