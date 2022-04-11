import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CountriesScreen from "../screens/countriesScreen";
import CountryScreen from "../screens/countryScreen";

// Créer le navigator
const Stack = createNativeStackNavigator();

// Paramétrer le stack
const MyStackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Countries"
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
                name="Countries"
                component={CountriesScreen}
                options={{
                    title: "Liste des pays"
                }}
            />
            <Stack.Screen
                name="Country"
                component={CountryScreen}
                options={{
                    title: "Détail pays"
                }}
            />
        </Stack.Navigator>
    )
}

export default MyStackNavigator;