import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import PharmacyMenuScreen from '../Pharmacy Screens/PharmacyMenuScreen';
import NumbingScreen from '../Pharmacy Screens/NumbingScreen';
import DilatingScreen from '../Pharmacy Screens/DilatingScreen';
import SteroidScreen from '../Pharmacy Screens/SteroidScreen';
import GlaucomaScreen from '../Pharmacy Screens/GlaucomaScreen';

const Stack = createStackNavigator();

const PharmacyScreen = () => {
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