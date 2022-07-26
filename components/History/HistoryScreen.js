import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryMenuScreen from "../HistoryMenu/HistoryMenuScreen";
import CCScreen from "../CC/CCScreen";
import HPIScreen from "../HPI/HPIScreen";
import PMHScreen from "../PMH/PMHScreen";
import FHScreen from "../FH/FHScreen";

const Stack = createNativeStackNavigator();

const HistoryScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HistoryMenu"
          component={HistoryMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CC"
          component={CCScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HPI"
          component={HPIScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PMH"
          component={PMHScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FH"
          component={FHScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}

export default HistoryScreen;
