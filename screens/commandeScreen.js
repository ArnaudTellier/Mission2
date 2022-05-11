import React from "react";
import {Text,View, StyleSheet} from "react-native";
import { useEffect, useState } from "react"
import axiosInstance from "../config/axios";
import ButtonPerso from "../components/button";

const CommandeScreen = ({navigation,route}) => {


    const [commande, setCommande] = useState([])

    const fetchAll = async (idCommande) => {
        try {
            
            const _commande = await axiosInstance.get(`/commande/${idCommande}`).then(response => response.data)
            setCommande(_commande);
            console.log(_commande);
            
        } catch (error) {
            console.log(error);
            console.log("Problème avec fetchAll de la commande");
        }
        
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return(
        <View style={styles.container}>
            <Text>Commande :</Text>
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

export default CommandeScreen;