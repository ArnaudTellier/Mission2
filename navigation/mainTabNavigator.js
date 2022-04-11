import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PostScreen from "../screens/postScreen";
import ContactScreen from "../screens/contactScreen";
import LogOutScreen from "../screens/logOutScreen.js";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = ()=> {
    return(
        <Tab.Navigator
            initialRouteName="Posts"
            screenOptions={{
                headerStyle : {
                    backgroundColor:"#2E4857"
                },
                headerTitleStyle: {
                    color:"#FFF",
                    fontWeight:'bold'
                },
                headerTitleAlign :"center",
                tabBarStyle : {
                    backgroundColor: "#2E4857",
                    borderRadius:25,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    marginHorizontal: 10
                },
                tabBarActiveTintColor: "#F18F01",
                tabBarInactiveTintColor: "#FFF"
            }}
        >
            <Tab.Screen
                name='Posts'
                component={PostScreen}
                options={ {
                    headerTitle: "Liste des posts",
                    tabBarLabel: "Mes posts",
                    tabBarIcon: ({focused,color}) =>
                        <MaterialCommunityIcons name="post" size={focused ? 28 : 20} color={color} />
                }}
            />
            <Tab.Screen
                name='Contact'
                component={ContactScreen}
                options={ {
                    headerTitle: "Nous contacter",
                    tabBarLabel: "Contact",
                    tabBarIcon: ({focused,color}) =>
                        <MaterialIcons name="contact-page" size={focused ? 28 : 20} color={color} />
                }}
            />
            <Tab.Screen
                name='LogOut'
                component={LogOutScreen}
                options={ {
                    headerTitle: "Déconnexion",
                    tabBarLabel: "Déco",
                    tabBarIcon: ({focused,color}) =>
                        <MaterialIcons name="logout" size={focused ? 28 : 20} color={color} />
                }}
            />
        </Tab.Navigator>
    )

}

export default MainTabNavigator;