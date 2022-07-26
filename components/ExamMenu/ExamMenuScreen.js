import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView} from 'react-native';
import { colors } from '../utils/colors';

const ExamMenuScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.title}>EXAM</Text>
            <Text style={styles.description}>
              Find a workflow that works for you!
            </Text>
          </View>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("InspectEyes")}>
            <Text style={styles.section}>
              Inspect eyelids and eyeballs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
            <Text style={styles.section}>
              Test pupils
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
            <Text style={styles.section}>
              Test visual fields
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
            <Text style={styles.section}>
              Test extraocular movements
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
            <Text style={styles.section}>
              Test visual acuity
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
            <Text style={styles.section}>
              Administer eye drops
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: colors.bgwhite,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 10,
          marginRight: 10,
          marginTop: Platform.OS === "android" ? 60: 100,
          marginBottom: 120,
      },
      scrollView: {
          flex: 1,
          backgroundColor: colors.bgwhite,
          marginLeft: 10,
          marginRight: 10,
      },
      description: {
        fontSize: Platform.OS === "android" ? 17: 17,
        fontFamily: 'OpenSansBold',
        marginBottom: 30,
        color: 'black',
        textAlign: 'center',
        marginRight: 30,
        marginLeft: 30,
      },
      section: {
          fontSize: Platform.OS === "android" ? 25: 25,
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

      },
      title: {
          fontSize: Platform.OS === "android" ? 50: 70,
          marginBottom: 10,
          color: colors.darkerblue,
          fontFamily: 'Copperplate',
          textAlign: 'center'
      },
  });

export default ExamMenuScreen;
