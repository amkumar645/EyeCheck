import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../Home/HomeScreen";
import AboutScreen from "../About/AboutScreen";
import HistoryScreen from "../History/HistoryScreen";

const Stack = createNativeStackNavigator();
// Stack Navigation From Home Page
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="About"
          component={AboutScreen} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="History"
          component={HistoryScreen} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Exam"
          component={HomeScreen} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Pharmacy"
          component={HomeScreen} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Glossary"
          component={HomeScreen} 
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default MainStackNavigator;