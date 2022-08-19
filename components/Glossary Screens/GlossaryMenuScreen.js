import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { colors } from '../utils/colors';

const GlossaryMenuScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>Glossary</Text>
          </View>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("SpanishGlossary")}>
            <Text style={styles.section}>
              <Text>{" "}</Text>
              Spanish glossary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("OphtalmologyGlossary")}>
            <Text style={styles.section}>
              <Text>{" "}</Text>
              Ophthalmology glossary
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
          marginLeft: 10,
          marginRight: 10,
          marginTop: Platform.OS === "android" ? 60: 100,
      },
      description: {
        fontSize: Platform.OS === "android" ? 17: 17,
        fontFamily: 'OpenSansBold',
        marginBottom: 30,
        color: 'black',
        textAlign: 'center',
        marginRight: 30,
        marginLeft: 30
      },
      footer: {
          fontSize: Platform.OS === "android" ? 20: 25,
          color: colors.darkblue,
          fontFamily: 'Copperplate',
          marginTop: 20,
      },
      section: {
          fontSize: Platform.OS === "android" ? 20: 20,
          color: colors.darkblue,
          fontFamily: 'OpenSansBold',
          textAlign: 'center',
          marginLeft: 2,
          marginRight: 2
      },
      sectionBox: {
          borderWidth: 1,
          borderColor: colors.darkblue,
          backgroundColor: colors.lightblue,
          borderRadius: 5,
          width: 200,
          minHeight: 190,
          justifyContent: 'center',
          marginBottom: 20,

      },
      title: {
          fontSize: Platform.OS === "android" ? 60: 70,
          marginBottom: Platform.OS === "android" ? 70: 60,
          color: colors.darkerblue,
          fontFamily: 'Copperplate',
          textAlign: 'center'
      },
  });

export default GlossaryMenuScreen;
