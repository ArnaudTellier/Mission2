import React from "react";
import {Text,View, StyleSheet} from "react-native";

const LogOutScreen =() => {
    return(
        <View style={styles.container}>
            <Text>List des posts</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default LogOutScreen;