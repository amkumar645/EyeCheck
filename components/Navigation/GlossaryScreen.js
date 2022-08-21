import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlossaryMenuScreen from '../Glossary Screens/GlossaryMenuScreen';
import SpanishGlossary from '../Glossary Screens/SpanishGlossary';
import OphthalmologyGlossary from '../Glossary Screens/OphthalmologyGlossary';

const Stack = createNativeStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const GlossaryScreen = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
        headerShown: false, 
        cardStyleInterpolator: forFade
      }}>
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
