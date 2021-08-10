import React, { useState } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert, } from 'react-native';
import firebase from "firebase"
    ;
import CircleButton from "../components/CircleButton";

export default function MemoEditScreen(props) {
    const { navigation, route } = props;
    const { id, bodyText } = route.params;
    const [body, setBody] = useState(bodyText);

    // useEffect(() => {
    //     const { currentUser } = firebase.auth();
    //     let unsubscribe = () => { };

    //     if (currentUser) {
    //         const db = firebase.firestore();
    //         const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
    //         unsubscribe = ref.onSnapshot((doc) => {
    //             const data = doc.data();
    //             setBody({
    //                 id: doc.id,
    //                 bodyText: data.bodyText,
    //                 updateAt: data.updateAt.toDate(),
    //             });
    //         }, (error) => {
    //             console.log(error);
    //             Alert.alert("データの取得に失敗しました");
    //         });
    //     }
    //     return unsubscribe;
    // }, []);

    function handlePress() {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
            ref.set({
                bodyText: body,
                updateAt: new Date(),
            })
                .then(() => {
                    navigation.goBack();
                })
                .catch(() => {
                    Alert.alert("データの編集に失敗しました")
                });
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput
                    value={body}
                    multiline
                    style={styles.input}
                    onChangeText={(text) => setBody(text)}
                />
            </View>
            <CircleButton name="check" onPress={handlePress} />
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