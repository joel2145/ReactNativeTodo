import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./src/components/Header";
import MemoList from "./src/components/MemoList";
import NewButton from "./src/components/NewButton";

export default function App() {
  return (
    <View style={styles.container}>

      <Header />

      <MemoList />

      <NewButton>＋</NewButton>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
