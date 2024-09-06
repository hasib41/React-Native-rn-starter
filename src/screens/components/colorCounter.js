import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({title,onIncrease,onDecrease}) => {
    return <View>
        <Text style = { styles.text } > {title} </Text>
        <Button 
          title={`Increase ${title}`}
          onPress={()=>{ onIncrease() }}
        />
        <Button 
          title={`Decrease ${title}`}
          onPress={()=>{ onDecrease() }}
        />
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default ColorCounter;