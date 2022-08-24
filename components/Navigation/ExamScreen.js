import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ExamMenuScreen from "../Exam Screens/ExamMenuScreen";
import InspectEyesScreen from "../Exam Screens/InspectEyesScreen";
import TVFieldsScreen from '../Exam Screens/TVFieldsScreen';
import TestMovements from '../Exam Screens/TestMovements';
import TestPupils from '../Exam Screens/TestPupils';
import TestVA from '../Exam Screens/TestVA';
import SnellenNumerical from '../Exam Screens/SnellenNumerical';
import SnellenAlphabetical from '../Exam Screens/SnellenAlphabetical';
import AdministerDrops from '../Exam Screens/AdministerDrops';

const Stack = createStackNavigator();

const ExamScreen = () => {
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
          name="ExamMenu"
          component={ExamMenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InspectEyes"
          component={InspectEyesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TVFields"
          component={TVFieldsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TestMovements"
          component={TestMovements}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TestPupils"
          component={TestPupils}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TestVA"
          component={TestVA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SnellenNumerical"
          component={SnellenNumerical}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SnellenAlphabetical"
          component={SnellenAlphabetical}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdministerDrops"
          component={AdministerDrops}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      );
  }

export default ExamScreen;
