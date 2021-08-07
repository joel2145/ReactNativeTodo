import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from "../components/Header";
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";

export default function MemoListScreen() {
    return (
        <View style={styles.container}>

            <Header />

            <MemoList />

            <CircleButton>＋</CircleButton>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});