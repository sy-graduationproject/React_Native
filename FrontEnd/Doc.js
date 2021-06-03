import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Modal, Pressable } from 'react-native';

const Doc = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.TContainer}>
                <Text style={styles.Title}>사용 방법</Text>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subTitle}>1️⃣ 냉장고 재료 가져오기</Text>
                <View style={styles.list}>
                    <Text style={styles.listfont}>✖︎ 앱 실행시 냉장고에 있는 재료를 인식해서 나타내준다.</Text>
                    <Text style={styles.listfont}>✖︎ 홈 화면에서 Reload 버튼을 누르면 냉장고에 있는    재료를 재인식하여 나타내준다.</Text>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subTitle}>2️⃣ 재료 정보 보기</Text>
                <View style={styles.list}>
                    <Text style={styles.listfont}>✖︎ 홈 화면에서 재료 이미지가 나타나있는 버튼을 클릭할 수 있다.</Text>
                    <Text style={styles.listfont}>✖︎ 재료 버튼을 클릭시 해당 재료로 만들 수 있는 레시피를 볼 수 있다.</Text>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subTitle}>3️⃣ 메모</Text>
                <View style={styles.list}>
                    <Text style={styles.listfont}>✖︎ 장보러 갈 때, 레시피 내용을 저장할 때 사용하면 유용한 기능이다.</Text>
                    <Text style={styles.listfont}>✖︎ 메모를 입력 후 OK 버튼을 누르면 메모가 저장된다.</Text>
                    <Text style={styles.listfont}>✖︎ 펜 버튼을 눌러 메모를 수정할 수 있다.</Text>
                    <Text style={styles.listfont}>✖︎ 휴지통 버튼을 눌러 메모를 삭제할 수 있다.</Text>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subTitle}>4️⃣ 더보기</Text>
                <View style={styles.list}>
                    <Text style={styles.listfont}>✖︎ 앱 제작자의 정보를 확인할 수 있다.</Text>
                    <Text style={styles.listfont}>✖︎ Doc 버튼을 누르면 앱의 사용방법을 확인할 수 있다.</Text>
                    <Text style={styles.listfont}>✖︎ QnA 버튼을 누르면 앱에 관한 질문들과 그에 관한 답을 확인할 수 있다. </Text>
                    <Text style={styles.listfont}>✖︎ JBNU 버튼을 누르면 학과 홈페이지를 방문할 수 있다.</Text>
                    <Text style={styles.listfont}>✖︎ 로그아웃 버튼을 누르면 로그아웃을 할 수 있다.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column'
    },
    TContainer: {
        alignItems:'center',
        marginTop: 20
    },
    Title: {
        fontSize: 40
    },
    subContainer: {
        margin: 20,
    },
    subTitle: {
        fontSize: 20
    },
    list: {
        margin: 20
    },
    listfont: {
        margin: 7,
        fontSize: 15
    }
});

export default Doc;