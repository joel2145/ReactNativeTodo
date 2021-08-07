import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import Header from "../components/Header";
import Button from "../components/Button";

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>新規登録</Text>
                <TextInput value="Email Address" style={styles.input} />
                <TextInput value="Password" style={styles.input} />
                <Button label="Submit" />
                <View>
                    <Text style={styles.footerLink}>登録済みの方はこちら</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: "#dddddd",
        borderWidth: 1,
        paddingHorizontal: 8,
        marginBottom: 15,
    },
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
    footerLink: {
        color: "#467fd3",
    },
});