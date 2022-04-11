import {NavigationContainer} from "@react-navigation/native";
import LoginStackNavigator from "./navigation/loginStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>
  );
}
