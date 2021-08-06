import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NewButton(props) {
    const { children } = props;
    return (
        <View style={styles.newButton}>
            <Text style={styles.newButtonLabel}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    newButton: {
        backgroundColor: "skyblue",
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 30,
        bottom: 40,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    newButtonLabel: {
        color: "white",
        fontSize: 30,
    },
});