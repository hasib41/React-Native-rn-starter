import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";

const TextScreen = () =>{
 const [ name, setName ] = useState('');
 const [ password, setPassword ] = useState('');
   return(
    <View>
        <Text>Enter Name :</Text>
        <TextInput
           style={styles.input}
           autoCapitalize="none"
           autoCorrect={false}
           value={name}
           onChangeText={(newValue) => {setName(newValue)}}
        />
        <Text>My name is {name}</Text>
        <View>
        <Text>Enter Password :</Text>
        <TextInput
           style={styles.input}
           autoCapitalize="none"
           autoCorrect={false}
           value={password}
           onChangeText={(newValue) => {setPassword(newValue)}}
        />
        {password.length < 5 ? <Text>Password must be 5 characters</Text> : null}
        </View>
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