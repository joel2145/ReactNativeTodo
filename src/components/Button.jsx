import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Button(props) {
    const { label } = props;
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "skyblue",
        borderRadius: 4,
        alignSelf: "flex-start",
        marginBottom: 20,
    },
    buttonLabel: {
        color: "white",
        fontSize: 16,
        paddingHorizontal: 32,
        paddingVertical: 8,
    },
});