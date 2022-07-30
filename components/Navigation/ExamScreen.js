import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExamMenuScreen from "../Exam Screens/ExamMenuScreen";
import InspectEyesScreen from "../Exam Screens/InspectEyesScreen";

const Stack = createNativeStackNavigator();

const ExamScreen = () => {
    return (
      <Stack.Navigator>
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
      </Stack.Navigator>
      );
  }

export default ExamScreen;
