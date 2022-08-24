import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HistoryMenuScreen from "../History Screens/HistoryMenuScreen";
import CCScreen from "../History Screens/CCScreen";
import HPIScreen from "../History Screens/HPIScreen";
import PMHScreen from "../History Screens/PMHScreen";
import FHScreen from "../History Screens/FHScreen";

const Stack = createStackNavigator();

const HistoryScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
        headerShown: false,
        cardStyleInterpolator:CardStyleInterpolators.forFadeFromCenter
        // This is the other one that doesn't fade, it scales
        // cardStyleInterpolator:CardStyleInterpolators.forScaleFromCenterAndroid
      }}
      >
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
