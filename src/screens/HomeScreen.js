import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return <View>
      <Text style = { styles.text } > HomeScreen 1</Text>
      <Button 
        onPress={()=>{props.navigation.navigate('components')}}
        title="Go To Components Demo"
      />
      <Button 
        onPress={()=>{props.navigation.navigate('List')}}
        title="Go To List Demo"
      />
      <Button 
        onPress={()=>{props.navigation.navigate('Image')}}
        title="Go To Image screen"
      />
      <Button 
        onPress={()=>{props.navigation.navigate('Counter')}}
        title="Go To Counter Demo"
      />
      <Button 
        onPress={()=>{props.navigation.navigate('Color')}}
        title="Go To Color Demo"
      />
      <Button 
        onPress={()=>{props.navigation.navigate('Square')}}
        title="Go To Square Screen Demo"
      />
      <Button 
        onPress={()=>{props.navigation.navigate('Text')}}
        title="Go To Text Screen"
      />
      <Button 
        onPress={()=>{props.navigation.navigate('Box')}}
        title="Go To See Box Screen"
      />
      {/* <TouchableOpacity onPress={()=>{props.navigation.navigate('List')}}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity> */}
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;