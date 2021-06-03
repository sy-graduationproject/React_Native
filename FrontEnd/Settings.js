import React  from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Linking
} from 'react-native';
import { Ionicons, Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import Login from './Login'
import QnA from './QnA';

const Profile =({navigation})=> {
    return (
        <View style={styles.c}>
            <View style={styles.r}>
                <TouchableOpacity
                    style={styles.button} onPress={() => Linking.openURL("https://www.notion.so/PortFolio-956da3ae2b7a44488cda57ae4508d165")}>
                    <Ionicons name="man" size={30} color="black" />
                    <Text>Programmer</Text>
                    <Text>Sang</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL("https://www.notion.so/cb34df8ff2634e26b9ecc23c56720ff2")}>
                        <Ionicons name="man-outline" size={30} color="black" />
                    <Text>Programmer</Text>
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
                    style={styles.button}
                    onPress={()=> navigation.navigate(QnA)}>
                    <AntDesign name="questioncircleo" size={24} color="black" />
                    <Text>QnA</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.r}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL("https://www.jbnu.ac.kr/kor/")}>
                    <Ionicons name="school" size={24} color="black" />
                    <Text>JBNU</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                onPress={() => navigation.navigate(Login)}>
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text>Log Out</Text>
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
        alignItems: 'center',
        justifyContent:'center'
    },
    r: {
        flexDirection: 'row',
    },
    c: {
        flexDirection: 'column',
    },
});

export default Profile;