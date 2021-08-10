import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Button(props) {
    const { label, onPress, style } = props;
    return (
        <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
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