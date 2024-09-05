import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    return <View>
        <Text style = { styles.text } > Components Screen 3</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default ComponentsScreen;