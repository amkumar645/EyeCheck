import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExamMenuScreen from "../Exam Screens/ExamMenuScreen";
import InspectEyesScreen from "../Exam Screens/InspectEyesScreen";
import TVFieldsScreen from '../Exam Screens/TVFieldsScreen';
import TestMovements from '../Exam Screens/TestMovements';
import TestPupils from '../Exam Screens/TestPupils';
import TestVA from '../Exam Screens/TestVA';
import SnellenNumerical from '../Exam Screens/SnellenNumerical';
import SnellenAlphabetical from '../Exam Screens/SnellenAlphabetical';
import AdministerDrops from '../Exam Screens/AdministerDrops';
import GlossaryMenuScreen from '../Glossary Screens/GlossaryMenuScreen';
import SpanishGlossary from '../Glossary Screens/SpanishGlossary';
import OphthalmologyGlossary from '../Glossary Screens/OphthalmologyGlossary';

const Stack = createNativeStackNavigator();

const GlossaryScreen = () => {
    return (
      <Stack.Navigator>
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
