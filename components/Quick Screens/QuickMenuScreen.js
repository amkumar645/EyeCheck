import { Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const QuickMenuScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [on, setOn] = useState(false);

  const setOnTorch = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      setOn(!on)
    } else {
      Alert.alert('Access denied')
    }
  }
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('HOME')}>
            <View style={styles.linkLeft}>
              <Ionicons style={styles.iconLeft} name="chevron-back" size={30} color={colors.darkblue}/>
              <Text style={styles.textLeft}>Home</Text>
            </View>
            </TouchableOpacity>
          </View>
           <View>
            <Text style={styles.title}>Quick Start</Text>
            <Text style={styles.description}>
              Access eye charts and flashlight quickly
            </Text>
          </View>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("SnellenAlphabetical")}>
            <Text style={styles.section}>
              Alphabetical Snellen Chart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("SnellenNumerical")}>
            <Text style={styles.section}>
              Numerical Snellen Chart
            </Text>
          </TouchableOpacity>
          {on && <Camera style={styles.camera} type={type} flashMode={FlashMode.torch}>
          {Platform.OS === "android" &&
          <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
          {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>}
          </Camera>}
          <TouchableOpacity style={styles.sectionBox} onPress={setOnTorch}>
            <Text style={styles.section}>
              Turn Flashlight {on ? 'Off' : 'On'}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: colors.bgwhite,
          alignItems: 'center',
      },
      scrollView: {
          marginBottom: 70,
      },
      description: {
        fontSize: 15,
        fontFamily: 'OpenSansBold',
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
        marginRight: 30,
        marginLeft: 30,
      },
      links: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: Platform.OS === "android" ? 40: 20,
      },
      linkLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      },
      section: {
          fontSize: 23,
          color: colors.darkblue,
          fontFamily: 'OpenSansBold',
          textAlign: 'center',
          marginLeft: 2,
          marginRight: 2,
          marginVertical: Platform.OS === "android" ? 13: 16,
      },
      sectionBox: {
          borderWidth: 1,
          borderColor: colors.darkblue,
          backgroundColor: colors.lightblue,
          borderRadius: 5,
          width: 323,
          minHeight: 58,
          justifyContent: 'center',
          marginBottom: 20,
          marginTop: 20,
      },
      textLeft: {
        fontSize: Platform.OS === "android" ? 20: 25,
        color: colors.darkblue,
        fontFamily: 'Copperplate',
        textAlign: 'left',
        width: '85%'
      },
      title: {
          fontSize: Platform.OS === "android" ? 40: 50,
          marginTop: Platform.OS === "android" ? 40: 40,
          marginBottom: 20,
          color: colors.darkerblue,
          fontFamily: 'Copperplate',
          textAlign: 'center'
      },
  });

const FadeInView = (props, { navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <Animated.View // Special animatable View
      style={{
        flex: 1,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};


export default QuickMenuScreen;
