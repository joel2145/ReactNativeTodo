import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MemoList() {
    return (
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
    );
};

const styles = StyleSheet.create({
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