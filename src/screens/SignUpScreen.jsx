import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import Button from "../components/Button";

export default function SignUpScreen(props) {

    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>新規登録</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize="none"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <Button
                    label="Submit"
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "MemoList" }],
                        });
                    }}
                />
                <View>
                    <TouchableOpacity >
                        <Text
                            style={styles.footerLink}
                            onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: "LogIn" }],
                                });
                            }}
                        >既に登録済みの方はこちら</Text>
                    </TouchableOpacity>
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