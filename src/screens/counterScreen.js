import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () =>{  
 const [counter, setCounter] = useState(0);

   return(
    <View>
        <Button title="Increase" onPress={()=>{
            setCounter(counter + 1)
        }}/>
        <Button title="Decrease" onPress={()=>{
            setCounter(counter - 1)
        }}/>
        <Text>Counter Counter: {counter}</Text>
    </View>
   )
}

const styles = StyleSheet.create({

});

export default CounterScreen