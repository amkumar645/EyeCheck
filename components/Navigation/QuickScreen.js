import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import QuickMenuScreen from "../Quick Screens/QuickMenuScreen";
import SnellenNumerical from '../Quick Screens/SnellenNumerical';
import SnellenAlphabetical from '../Quick Screens/SnellenAlphabetical';

const Stack = createStackNavigator();

const QuickScreen = () => {
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
          name="QuickMenu"
          component={QuickMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SnellenAlphabetical"
          component={SnellenAlphabetical}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SnellenNumerical"
          component={SnellenNumerical}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      );
  }

export default QuickScreen;
