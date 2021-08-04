import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* ヘッダー */}
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      {/* メモリスト */}
      <View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2021年8月4日 10:00</Text>
          </View>
          <View>
            <Text>削除</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>宿題</Text>
            <Text>2021年8月4日 12:00</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
