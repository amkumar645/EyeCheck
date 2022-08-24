import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import GlossaryMenuScreen from '../Glossary Screens/GlossaryMenuScreen';
import SpanishGlossary from '../Glossary Screens/SpanishGlossary';
import OphthalmologyGlossary from '../Glossary Screens/OphthalmologyGlossary';

const Stack = createStackNavigator();

const GlossaryScreen = () => {
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
          name="GlossaryMenu"
          component={GlossaryMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SpanishGlossary"
          component={SpanishGlossary}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OphtalmologyGlossary"
          component={OphthalmologyGlossary}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      );
  }

export default GlossaryScreen;
