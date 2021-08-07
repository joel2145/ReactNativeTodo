import React from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, } from 'react-native';

import Header from "../components/Header";
import CircleButton from "../components/CircleButton";

export default function MemoEditScreen() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <Header />
            <View style={styles.inputContainer}>
                <TextInput value="買い物" multiline style={styles.input} />
            </View>
            <CircleButton name="check" />
        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1,
    },
    input: {
        flex: 1,
    },
});