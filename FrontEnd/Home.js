import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';


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
            <Text> Hi</Text>
            <Button
                title="Submit"
                onPress={() => onSubmit()}
            />
        </View>
    );
}

export default Home;