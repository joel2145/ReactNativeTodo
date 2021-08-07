import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Header from "../components/Header";
import CircleButton from "../components/CircleButton";

export default function MemoDetailScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoHeaderTitle}>買い物リスト</Text>
                <Text style={styles.memoHeaderDate}>2021年8月10日</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 150, bottom: "auto" }}>Edit</CircleButton>
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