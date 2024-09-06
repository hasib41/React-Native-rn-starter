import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";

const TextScreen = () =>{
 const [ name, setName ] = useState('')
   return(
    <View>
        <TextInput
           style={styles.input}
           autoCapitalize="none"
           autoCorrect={false}
           value={name}
           onChangeText={(newValue) => {setName(newValue)}}
        />
        <Text>My name is {name}</Text>
    </View>
   )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        padding: 5,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen