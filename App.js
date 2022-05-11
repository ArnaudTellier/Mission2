import {NavigationContainer} from "@react-navigation/native";
import LoginStackNavigator from "./navigation/loginStackNavigator";
import { useEffect, useState } from 'react'; //

export default function App() {
    
  return (
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>
  );
}
