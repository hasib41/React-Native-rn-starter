import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
             <Text style={styles.textOneStyle}>Child 1</Text>
             <Text style={styles.textTwoStyle}>Child 2</Text>
             <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textOneStyle: {
        borderWidth:1,
        borderColor: 'red',
        margin:5
    },
    textTwoStyle: {
        borderWidth:1,
        borderColor: 'red',
        margin:5,
        flex:1
    },
    textThreeStyle: {
        borderWidth:1,
        borderColor: 'red',
        margin:5
    }
})

export default BoxScreen