import React from "react";
import {Text,View, StyleSheet} from "react-native";

const ContactScreen =() => {
    return(
        <View style={styles.container}>
            <Text>List des contacts</Text>
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

export default ContactScreen;