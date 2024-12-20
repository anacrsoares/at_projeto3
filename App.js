import { Text, SafeAreaView, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "./screens/AuthScreen";
import UserInfoScreen from "./screens/UserInfoScreen";
import ReposScreen from "./screens/ReposScreen";
import IssuesScreen from "./screens/IssuesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthScreen">
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserInfoScreen"
          component={UserInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReposScreen"
          component={ReposScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IssuesScreen"
          component={IssuesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
