import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () =>{
    
    const friends = [
        { name: "Alice", age: 10},
        { name: "Bob", age: 20 },
        { name: "Charlie", age: 30},
        { name: "Hasib", age: 40},
        { name: "Drik", age:50 },
        { name: "Abrar", age:60 },
        { name: "Firoz", age:70},
    ];

    return <View>
     <Text style={styles.text}>List Screen</Text>
     <FlatList 
       horizontal={false}
       showsHorizontalScrollIndicator={false}
       keyExtractor={(friend)=>friend.name}
       data={friends}
       renderItem={({ item })=>{
        return (
          <View>
            <Text style={[styles.textStyle, styles.text]}>{[item.name, " -Age ", item.age ]}</Text>
          </View>
        )
       }}
     />
    </View> 
}

const styles = StyleSheet.create({
    text:{
        fontSize: 40
    },
    textStyle: {
        marginVertical: 50,
        marginLeft: 10
    }
})

export default ListScreen