import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./components/Navigation/TabNavigator";

const getFonts = async () =>
  await Font.loadAsync({
    'Copperplate': require('./assets/fonts/copperplate.ttf'),
    'CopperplateBold': require('./assets/fonts/copperplatebold.ttf'),
    'OpenSans': require('./assets/fonts/open-sans/OpenSans-Regular.ttf'),
    'OpenSansBold': require('./assets/fonts/open-sans/OpenSans-Bold.ttf'),
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
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
