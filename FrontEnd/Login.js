import React, { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import Navigation from './Navigation';
import Register from './Register';

export default function Login({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={username}
                onChangeText={(username) => setUsername(username)}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={() => navigation.navigate(Navigation)}
                />
                <Button
                    title={'Register'}
                    style={styles.input}
                    onPress={() => navigation.navigate(Register)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
