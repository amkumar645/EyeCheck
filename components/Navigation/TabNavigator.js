
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../utils/colors';
import { StyleSheet, Text } from 'react-native';
import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import HomeScreen from "../Home/HomeScreen";
import HistoryScreen from "./HistoryScreen";
import AboutScreen from "../About/AboutScreen";
import ExamScreen from "./ExamScreen";
import GlossaryScreen from "./GlossaryScreen";
import PharmacyScreen from "../Pharmacy Screens/PharmacyScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',
          paddingBottom: Platform.OS === "android" ? 20: 30,
          backgroundColor: colors.bgwhite,
          borderTopColor: "black",
          borderTopWidth: 1,
          height: Platform.OS === "android" ? 80: 100,
        },
        tabBarButton: ['ABOUT'].includes(route.name)
        ? () => {
            return null;
          }
        : undefined,
      })}
    >
      <Tab.Screen name="HOME" component={HomeScreen}
        options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ focused }) => {
                if (!focused) {
                  return <Ionicons name="home-sharp" style={styles.icon}/>
                }
                else {
                  return <Ionicons name="home-sharp" style={styles.focusedIcon}/>
                }
            },
            tabBarLabel: ({ focused }) => {
              if (!focused) {
                return <Text style={styles.label}>HOME</Text>
              }
              else {
                return <Text style={styles.labelFocused}>HOME</Text>
              }
            }
        }}
      />
      <Tab.Screen name="ABOUT" component={AboutScreen}
        options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarIcon: () => {
              return <></>
            },
            tabBarLabel: () => {
              return <></>
            },
        }}
      />
      <Tab.Screen name="HISTORY" component={HistoryScreen}
        options={{
            headerShown: false,
            tabBarIcon: ({focused}) => {
              if (!focused)
                return <FontAwesome5 style={styles.icon} name={'book-open'}/>
              else
                return <FontAwesome5 style={styles.focusedIcon} name={'book-open'}/>
            },
            tabBarLabel: ({ focused }) => {
              if (!focused) {
                return <Text style={styles.label}>HISTORY</Text>
              }
              else {
                return <Text style={styles.labelFocused}>HISTORY</Text>
              }
            }
        }}/>
      <Tab.Screen name="EXAM" component={ExamScreen}
       options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (!focused)
              return <Entypo style={styles.icon} name={'magnifying-glass'}/>
            else
              return <Entypo style={styles.focusedIcon} name={'magnifying-glass'}/>

          },
          tabBarLabel: ({ focused }) => {
            if (!focused) {
              return <Text style={styles.label}>EXAM</Text>
            }
            else {
              return <Text style={styles.labelFocused}>EXAM</Text>
            }
          }
      }}
      />
      <Tab.Screen name="PHARMACY" component={PharmacyScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (!focused)
              return <FontAwesome5 style={styles.icon} name={'eye-dropper'}/>
            else
              return <FontAwesome5 style={styles.focusedIcon} name={'eye-dropper'}/>
          },
          tabBarLabel: ({ focused }) => {
            if (!focused) {
              return <Text style={styles.label}>PHARMACY</Text>
            }
            else {
              return <Text style={styles.labelFocused}>PHARMACY</Text>
            }
          }
      }} />
      <Tab.Screen name="GLOSSARY" component={GlossaryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (!focused)
              return <FontAwesome5 style={styles.icon} name={'question'}/>
            else
              return <FontAwesome5 style={styles.focusedIcon} name={'question'}/>
          },
          tabBarLabel: ({ focused }) => {
            if (!focused) {
              return <Text style={styles.label}>GLOSSARY</Text>
            }
            else {
              return <Text style={styles.labelFocused}>GLOSSARY</Text>
            }
          }
      }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    view: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    focusedIcon: {
      fontSize: Platform.OS === "android" ? 35: 40,
      color: colors.darkerblue,
    },
    icon: {
      fontSize: Platform.OS === "android" ? 35: 40,
      color: colors.darkblue,
    },
    label: {
      color: colors.darkblue,
      fontFamily: 'Copperplate',
      fontSize: Platform.OS === "android" ? 10: 12,
      marginTop: Platform.OS === "android" ? 0: 0,
    },
    labelFocused: {
      color: colors.darkerblue,
      fontFamily: 'Copperplate',
      fontSize: Platform.OS === "android" ? 10: 12,
      marginTop: Platform.OS === "android" ? 0: 0,
    }
});

export default BottomTabNavigator;
