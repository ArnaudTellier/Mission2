import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CommandeScreen from "../screens/commandeScreen";
import CommandeModifierScreen from "../screens/commandeModifierScreen";


// Créer le navigator
const Stack = createNativeStackNavigator();

// Paramétrer le stack
const MyStackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Commande"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "coral"
                },
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: "bold"
                },
                headerTintColor : "#FFF"
            }}
        >
            <Stack.Screen
                name="Commande"
                component={CommandeScreen}
                options={{
                    title: "Détails commande"
                }}
            />

            <Stack.Screen
                name="CommandeModifier"
                component={CommandeModifierScreen}
                options={{
                    title: "Modifier commande"
                }}
            />
            
        </Stack.Navigator>
    )
}

export default MyStackNavigator;