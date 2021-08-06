import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* ヘッダー */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerLogOut}>ログアウト</Text>
        </View>
      </View>

      {/* メモリスト */}
      <View>

        <View style={styles.memoListItem}>
          <View>
            <Text>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2021年8月4日 10:00</Text>
          </View>
          <View>
            <Text>削除</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2021年8月4日 10:00</Text>
          </View>
          <View>
            <Text>削除</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2021年8月4日 10:00</Text>
          </View>
          <View>
            <Text>削除</Text>
          </View>
        </View>

      </View>

      {/* 新規メモ作成ボタン */}
      <View>
        <Text>＋</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  memoListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListItemDate: {
    color: "gray",
  },
});
