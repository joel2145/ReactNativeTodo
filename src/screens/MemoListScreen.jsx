import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from "firebase";

import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";

export default function MemoListScreen(props) {
    const { navigation } = props;

    // ログアウトボタンを表示　
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogOutButton />,
        });
    }, []);

    // メモのデータを取得
    useEffect(() => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        let unsubscribe = () => { };
        if (currentUser) {
            const ref = db.collection(`users/${currentUser.uid}/memos`);
            unsubscribe = ref.onSnapshot((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.id, doc.data());
                });
            }, (error) => {
                console.log(error);
                Alert.alert("データの取得に失敗しました");
            });
        }
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <MemoList />
            <CircleButton
                name="plus"
                onPress={() => { navigation.navigate("MemoCreate") }}
            ></CircleButton>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});