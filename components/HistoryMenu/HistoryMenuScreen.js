import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,ScrollView} from 'react-native';
import { colors } from '../utils/colors';

const HistoryMenuScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>HISTORY</Text>
          <Text style={styles.description}>
            We suggest you go in order and follow the click-through prompts.
          </Text>
        </View>
        <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate('CC')}>
          <Text style={styles.section}>
            <Text>{" "}</Text>
            Chief complaint
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate('HPI')}>
          <Text style={styles.section}>
            <Text>{" "}</Text>
            History of present illness
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate('PMH')}>
          <Text style={styles.section}>
            <Text>{" "}</Text>
            Past medical history
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate('FH')}>
          <Text style={styles.section}>
            <Text>{"  "}</Text>
            Family & social history
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
        // justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: Platform.OS === "android" ? 60: 100,
        marginBottom: 120
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
    icon: {
        fontSize: Platform.OS === "android" ? 30: 40,
    },
    logo: {
        height: 172,
        width: 154,
        marginBottom: 30,
    },
    scrollView: {
        backgroundColor: colors.bgwhite,
        marginLeft: 10,
        marginRight: 10,
    },
    section: {
        fontSize: 25,
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
        width: 323,
        minHeight: 84,
        justifyContent: 'center',
        marginBottom: 20,

    },
    title: {
        fontSize: Platform.OS === "android" ? 60: 70,
        marginBottom: 30,
        color: colors.darkerblue,
        fontFamily: 'Copperplate',
        textAlign: 'center'
    },
});

export default HistoryMenuScreen;
