import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { string } from "prop-types";

function Hello(props) {
    const { children } = props;
    return (
        <View>
            <Text style={styles.text}>Hello! {children}</Text>
        </View>
    );
};

Hello.propTypes = {
    children: string,
};

const styles = StyleSheet.create({
    text: {
        color: "skyblue",
        fontSize: 20,
    },
});

export default Hello;
