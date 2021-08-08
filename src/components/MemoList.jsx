import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
    const navigation = useNavigation();
    return (
        <View>

            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate("MemoDetail") }}
            >
                <View>
                    <Text>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2021年8月4日 10:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert("削除") }}
                >
                    <Feather name="x" size={20} color="gray" />
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate("MemoDetail") }}
            >
                <View>
                    <Text>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2021年8月4日 10:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert("削除") }}
                >
                    <Feather name="x" size={20} color="gray" />
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate("MemoDetail") }}
            >
                <View>
                    <Text>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2021年8月4日 10:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert("削除") }}
                >
                    <Feather name="x" size={20} color="gray" />
                </TouchableOpacity>
            </TouchableOpacity>

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
    memoDelete: {
        padding: 8,
    },
});