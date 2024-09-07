import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "./components/colorCounter";

const COLOR_INCREMENT=10;
const SquareScreen = () => {
    const [red,setRed]=useState(0)
    const [green,setGreen]=useState(0)
    const [blue,setBlue]=useState(0)
    
const setColor = (color,change) =>{
   switch(color){
    case 'red':
        red + change > 255 || red + change < 0 ? null : setRed( red + change )
        return
    case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen( green + change )
        return
    case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue( blue + change )
        return
    default:
        return
   }
}    

    return <View>
        <ColorCounter 
          title="red"
          onIncrease={()=>{setColor('red', COLOR_INCREMENT)}}
          onDecrease={()=>{setColor('red', -1 * COLOR_INCREMENT)}}
        />
        <ColorCounter 
          title="green"
          onIncrease={()=>{setColor('green', COLOR_INCREMENT)}}
          onDecrease={()=>{setColor('green', -1 * COLOR_INCREMENT)}}
        />
        <ColorCounter
          title="blue"
          onIncrease={()=>{setColor('green', COLOR_INCREMENT)}}
          onDecrease={()=>{setColor('green', -1 * COLOR_INCREMENT)}}
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