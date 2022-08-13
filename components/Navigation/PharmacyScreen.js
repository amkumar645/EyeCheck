import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PharmacyMenuScreen from '../Pharmacy Screens/PharmacyMenuScreen';
import NumbingScreen from '../Pharmacy Screens/NumbingScreen';
import DilatingScreen from '../Pharmacy Screens/DilatingScreen';
import SteroidScreen from '../Pharmacy Screens/SteroidScreen';
import GlaucomaScreen from '../Pharmacy Screens/GlaucomaScreen';

const Stack = createNativeStackNavigator();

const PharmacyScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="PharmacyMenu"
          component={PharmacyMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Numbing"
          component={NumbingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dilating"
          component={DilatingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Steroid"
          component={SteroidScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Glaucoma"
          component={GlaucomaScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      );
  }

export default PharmacyScreen;