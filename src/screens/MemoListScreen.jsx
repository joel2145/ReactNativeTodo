import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from "firebase";

import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";

export default function MemoListScreen(props) {
    const { navigation } = props;

    const [memos, setMemos] = useState([]);

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
            const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy("updateAt", "desc");;
            unsubscribe = ref.onSnapshot((snapshot) => {
                const userMemos = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    userMemos.push({
                        id: doc.id,
                        bodyText: data.bodyText,
                        updateAt: data.updateAt.toDate(),
                    });
                });
                setMemos(userMemos);
            }, (error) => {
                console.log(error);
                Alert.alert("データの取得に失敗しました");
            });
        }
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <MemoList memos={memos} />
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