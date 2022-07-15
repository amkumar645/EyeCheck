
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator} from "./StackNavigator";
import { colors } from '../utils/colors';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import HomeScreen from "../Home/HomeScreen";
import HistoryScreen from "../History/HistoryScreen";
import AboutScreen from "../About/AboutScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarIcon: () => (
                <Ionicons name="home-sharp" style={styles.icon}/>
            )
        }}
      />
      {/* Must get rid of this since it shouldn't be a tab
          Look into nested navigation?
       */}
      <Tab.Screen name="About" component={AboutScreen} 
        options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarIcon: () => (
                <Ionicons name="home-sharp" style={styles.icon}/>
            )
        }}
      />
      <Tab.Screen name="History" component={HistoryScreen}
        options={{
            headerShown: false,
            tabBarIcon: () => (
                <FontAwesome5 style={styles.icon} name={'book-open'}/>
            )
        }}/>
      {/* <Tab.Screen name="Exam" component={MainStackNavigator}
        options={{headerShown: false}}/>
      <Tab.Screen name="Pharmacy" component={MainStackNavigator}
        options={{headerShown: false}}/>
      <Tab.Screen name="Glossary" component={MainStackNavigator}
        options={{headerShown: false}}/> */}
    </Tab.Navigator>
  );
};


// Home Screen Navigation
function Home() {
  return (
    <MainStackNavigator/>
  );
}

const styles = StyleSheet.create({
    view: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
        fontSize: Platform.OS === "android" ? 20: 20,
        color: colors.darkerblue
    }
});

export default BottomTabNavigator;