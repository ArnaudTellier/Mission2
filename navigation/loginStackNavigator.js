import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginScreen";
import MainTabNavigator from "./mainTabNavigator";

const Stack = createNativeStackNavigator();

const LoginStackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="MainTab"
                component={MainTabNavigator}
            />
        </Stack.Navigator>
    )
}

export default LoginStackNavigator;