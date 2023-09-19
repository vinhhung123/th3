import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
//import CustomNavigationBar from "./CustomNavigationBar";
import HomeScreen from "../HomeScreen";
import DetailsScreen from "../DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";

 

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home" 
        >
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
