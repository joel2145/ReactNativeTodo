import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import firebase from "firebase";

import CircleButton from "../components/CircleButton";
import { dateToString } from "../utils/index.js";

export default function MemoDetailScreen(props) {

    const { navigation, route } = props;
    const { id } = route.params;
    const [memo, setMemo] = useState("");

    // メモの詳細を獲得して表示
    useEffect(() => {
        const { currentUser } = firebase.auth();
        let unsubscribe = () => { };

        if (currentUser) {
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
            unsubscribe = ref.onSnapshot((doc) => {
                const data = doc.data();
                setMemo({
                    id: doc.id,
                    bodyText: data.bodyText,
                    updateAt: data.updateAt.toDate(),
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
            <View style={styles.memoHeader}>
                <Text style={styles.memoHeaderTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
                <Text style={styles.memoHeaderDate}>{memo && dateToString(memo.updateAt)}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    {memo && memo.bodyText}
                </Text>
            </ScrollView>
            <CircleButton name="edit-2" style={{ top: 60, bottom: "auto" }} onPress={() => { navigation.navigate("MemoEdit") }} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    memoHeader: {
        backgroundColor: "skyblue",
        height: 96,
        justifyContent: "center",
        paddingLeft: 20,
        borderTopWidth: 1,
        borderColor: "rgba(0,0,0,0.15)",
    },
    memoHeaderTitle: {
        fontSize: 20,
        color: "#fff",
    },
    memoHeaderDate: {
        fontSize: 12,
        color: "#fff",
    },
    memoBody: {
        paddingHorizontal: 27,
        paddingVertical: 32,
    },
});