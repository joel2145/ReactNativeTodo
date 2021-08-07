import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
    const { style, name, onPress } = props;
    return (
        <TouchableOpacity style={[styles.CircleButton, style]} onPress={onPress}>
            <Feather name={name} size={32} color="#fff" />
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    CircleButton: {
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
    CircleButtonLabel: {
        color: "white",
        fontSize: 30,
    },
});