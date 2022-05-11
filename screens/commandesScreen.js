import React from "react";
import {Text,View, StyleSheet} from "react-native";
import { useEffect, useState } from "react"
import axiosInstance from "../config/axios";
import ButtonPerso from "../components/button";
import reactDom from "react-dom";
import MyStackNavigator from "../navigation/myStackNavigator";

const CommandesScreen = ({ navigation: { navigate } }) => {

    const [commandes, setCommandes] = useState([])

    const fetchAll = async () => {
        try {
            
            const _commandes = await axiosInstance.get('commandes').then(response => response.data)
            setCommandes(_commandes);
            console.log(_commandes);
            
        } catch (error) {
            console.log(error);
            console.log("Problème avec fetchAll des commandes");
        }
        
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return(
        <View style={styles.container}>
            {
                commandes.map(commande => {
                    return (
                        <>
                            <View style={styles.commandes}>
                            <View style={styles.commande}><Text key={commande.idCommande}>Commande N°{commande.idCommande} - {commande.idStatut.libelleStatut} - Table N°{commande.noTable}</Text></View>
                            <ButtonPerso name="Voir" navigation={() => navigate('Commande')}/>
                            </View>
                        </>
                        
                    )})
            }
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        alignItems: "center"
    },
    commandes: {
        flex: 1,
        flexDirection: "row",
    },
    commande: {
        margin: 50
    }
})

export default CommandesScreen;