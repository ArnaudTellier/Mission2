import React, {useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import TextInput from "../components/textInput";
import ButtonPerso from "../components/button";
import axios from "../config/axios"


const LoginScreen =(navigation) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post("/login_check", {
                "username" : username,
                "password" : password
            })
            const token = response.data.token
            // Stoker le token
            navigation.replace("MainTab")
        }
        catch (error){
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Connexion
            </Text>
            <View style={styles.input}>
                <TextInput
                    icon = "mail"
                    placeholder="Entrer votre mail"
                    keyboardType="email-address"
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    icon = "key"
                    placeholder="Votre mot de passe"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.button}>
                <ButtonPerso
                    name="Connexion"
                />
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title :{
        color:"#225e4b",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 40
    },
    input: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10
    }
})

export default LoginScreen;