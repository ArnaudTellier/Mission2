import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

const ButtonPerso = ({name, navigation}) => {
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.button} onPress={navigation}>
               <Text>{name}</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#223e4b",
        borderRadius: 20,
        borderWidth: 0,
    },
    button: {
        padding: 10,
    }
})

export default ButtonPerso;