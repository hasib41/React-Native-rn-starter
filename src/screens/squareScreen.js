import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "./components/colorCounter";

const SquareScreen = () => {
    const [red,setRed]=useState(0)
    const [green,setGreen]=useState(0)
    const [blue,setBlue]=useState(0)
    
    console.log(red)
    console.log(green)
    console.log(blue)
    return <View>
        <ColorCounter 
          title="red"
          onIncrease={()=>setRed(red + 10)}
          onDecrease={()=>setRed(red - 10)}
        />
        <ColorCounter 
          title="green"
          onIncrease={()=>setGreen(green + 10)}
          onDecrease={()=>setGreen(green - 10)}
        />
        <ColorCounter
           title="blue"
           onIncrease={()=>setBlue(blue + 10)}
           onDecrease={()=>setBlue(blue - 10)}
        />
        <View style={{height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default SquareScreen;