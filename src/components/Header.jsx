import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerLogOut}>ログアウト</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 100,
        backgroundColor: "skyblue",
        justifyContent: "flex-end",
    },
    headerInner: {
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 23,
        color: "#fff",
        paddingBottom: 10,
    },
    headerLogOut: {
        position: "absolute",
        right: 18,
        bottom: 8,
        color: "#fff",
    },
});