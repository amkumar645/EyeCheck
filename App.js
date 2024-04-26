import 'react-native-gesture-handler';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useContext, useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import BottomTabNavigator from "./components/Navigation/TabNavigator";

SplashScreen.preventAutoHideAsync();

const getFonts = async () =>
  await Font.loadAsync({
    'Copperplate': require('./assets/fonts/copperplate.ttf'),
    'CopperplateBold': require('./assets/fonts/copperplatebold.ttf'),
    'OpenSans': require('./assets/fonts/open-sans/OpenSans-Regular.ttf'),
    'OpenSansBold': require('./assets/fonts/open-sans/OpenSans-Bold.ttf'),
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
      'Copperplate': require('./assets/fonts/copperplate.ttf'),
      'CopperplateBold': require('./assets/fonts/copperplatebold.ttf'),
      'OpenSans': require('./assets/fonts/open-sans/OpenSans-Regular.ttf'),
      'OpenSansBold': require('./assets/fonts/open-sans/OpenSans-Bold.ttf'),
      });
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsloaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsloaded]);

  if (!fontsloaded) {
    setTimeout(() => {setFontsLoaded(true)}, 2000)
    //setFontsLoaded(true)
    return null;
  }

  return (
      <NavigationContainer
        onReady={onLayoutRootView}
      >
        <BottomTabNavigator/>
      </NavigationContainer>
  );
}
