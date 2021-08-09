import React from "react";
import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import firebase from "firebase";
import { useNavigation } from '@react-navigation/native';


export default function LogOutButton() {

    // ログアウト機能
    const navigation = useNavigation();

    function handlePress() {
        firebase.auth().signOut()
            .then(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: "LogIn" }],
                });
            })
            .catch(() => {
                Alert.alert("ログアウトに失敗しました")
            });
    };

    return (
        <TouchableOpacity style={styles.Container} onPress={handlePress}>
            <Text style={styles.Label}>ログアウト</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Container: {
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    Label: {
        color: "white",
        fontSize: 14,
    }
});