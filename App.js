import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import { colors } from './components/utils/colors';
import logo from './assets/logo.png';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import React, { useState } from "react";
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//start setting up screens here

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>EyeCheck</Text>
      </View>
      <Image
        style={styles.logo}
        source={logo}
      />
      <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate('History')}>
        <Text style={styles.section}>
          <FontAwesome5 style={styles.icon} name={'book-open'}/>
          <Text>{" "}</Text>
          History
        </Text>
      </TouchableOpacity>
      <View style={styles.sectionBox}>
        <Text style={styles.section}>
          <Entypo style={styles.icon} name={'magnifying-glass'}/>
          <Text>{" "}</Text>
          Exam
        </Text>
      </View>
      <View style={styles.sectionBox}>
        <Text style={styles.section}>
          <FontAwesome5 style={styles.icon} name={'eye-dropper'}/>
          <Text>{" "}</Text>
          Pharmacy
        </Text>
      </View>
      <View style={styles.sectionBox}>
        <Text style={styles.section}>
          <FontAwesome5 style={styles.icon} name={'question'}/>
          <Text>{"  "}</Text>
          Glossary
        </Text>
      </View>
      <View>
        <Text style={styles.footer}>ABOUT</Text>
      </View>
    </SafeAreaView>
  );
}

function HistoryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>History</Text>
      </View>
      <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
        <Text style={styles.section}>
          <Text>{" "}</Text>
          Chief complaint
        </Text>
      </TouchableOpacity>
      <View style={styles.sectionBox}>
        <Text style={styles.section}>
          <Text>{" "}</Text>
          History of present illness
        </Text>
      </View>
      <View style={styles.sectionBox}>
        <Text style={styles.section}>
          <Text>{" "}</Text>
          Past medical history
        </Text>
      </View>
      <View style={styles.sectionBox}>
        <Text style={styles.section}>
          <Text>{"  "}</Text>
          Family & social history
        </Text>
      </View>
    </SafeAreaView>
  );
}

//Background navigation stack setup

const getFonts = () =>
  Font.loadAsync({
    'Copperplate': require('./assets/fonts/copperplate.ttf'),
    'CopperplateBold': require('./assets/fonts/copperplatebold.ttf'),
  });

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="History" component={HistoryScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
      <MyStack />
    );
  }

  else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgwhite,
    alignItems: 'center',
    justifyContent: 'center',

  },
  footer: {
    fontSize: Platform.OS === "android" ? 20: 25,
    color: colors.darkblue,
    fontFamily: 'Copperplate',
    marginTop: 20,
  },
  icon: {
    fontSize: Platform.OS === "android" ? 30: 40,
  },
  logo: {
    height: 172,
    width: 154,
    marginBottom: 30,
  },
  section: {
    fontSize: Platform.OS === "android" ? 30: 40,
    color: colors.darkblue,
    marginLeft: 10,
    fontFamily: 'Copperplate',
  },
  sectionBox: {
    borderWidth: 2,
    borderColor: colors.darkblue,
    backgroundColor: colors.lightblue,
    borderRadius: 5,
    width: 323,
    height: 84,
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: Platform.OS === "android" ? 50: 60,
    marginBottom: 30,
    color: colors.darkerblue,
    fontFamily: 'Copperplate',
  },
});
