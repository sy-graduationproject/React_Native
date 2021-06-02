import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { Ionicons, Entypo  } from '@expo/vector-icons';

const Profile =()=> {
    return (
        <View style={styles.c}>
            <View style={styles.r}>
                <TouchableOpacity
                    style={styles.button}>
                    <Ionicons name="man" size={30} color="black" />
                    <Text>Sang</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                        <Ionicons name="man-outline" size={30} color="black" />
                    <Text>Young</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.r}>
                <TouchableOpacity
                    style={styles.button}>
                <Entypo name="text-document" size={24} color="black" />
                    <Text>Doc</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                        <Ionicons name="man-outline" size={30} color="black" />
                    <Text>Young</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.r}>
                <TouchableOpacity
                    style={styles.button}>
                <Entypo name="text-document" size={24} color="black" />
                    <Text>Doc</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                        <Ionicons name="man-outline" size={30} color="black" />
                    <Text>Young</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 180,
        width: 100,
         backgroundColor: 'skyblue',
        borderColor:'skyblue',
        margin: 20,
        flex: 1,
        alignContent: 'center',
        alignItems:'center',
    },
    r: {
        flexDirection: 'row',
    },
    c: {
        flexDirection: 'column',
    },
});

export default Profile;