import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from "firebase";

import { dateToString } from "../utils/index.js";

export default function MemoList(props) {

    const { memos } = props;
    const navigation = useNavigation();

    function deleteMemo(id) {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);

        Alert.alert("メモを削除します", "よろしいですか？", [
            {
                text: "キャンセル",
                onPress: () => { },
            },
            {
                text: "削除する",
                style: "destructive",
                onPress: () => {
                    ref.delete().catch(() => {
                        Alert.alert("削除に失敗しました。");
                    })
                },
            },
        ]);
    };

    function renderItem({ item }) {
        return (
            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate("MemoDetail", { id: item.id }); }}
            >
                <View>
                    <Text numberOfLines={1}>{item.bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dateToString(item.updateAt)}</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { deleteMemo(item.id) }}
                >
                    <Feather name="x" size={20} color="gray" />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={renderItem}
                keyExtractor={(item) => { return item.id }}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    memoListItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.15)",
    },
    memoListItemDate: {
        color: "gray",
    },
    memoDelete: {
        padding: 8,
    },
    container: {
        flex: 1,
    },
});