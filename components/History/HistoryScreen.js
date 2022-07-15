import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { colors } from '../utils/colors';

const HistoryScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>History</Text>
          <Text style={styles.description}>
            We suggest you go in order and follow the click-through prompts.
          </Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgwhite,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    description: {
      fontSize: Platform.OS === "android" ? 17: 17,
      fontFamily: 'OpenSansBold',
      marginBottom: 30,
      color: 'black',
      textAlign: 'center',
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
        fontSize: Platform.OS === "android" ? 30: 30,
        color: colors.darkblue,
        fontFamily: 'OpenSansBold',
        textAlign: 'center',
        marginLeft: 2,
        marginRight: 2
    },
    sectionBox: {
        borderWidth: 2,
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

export default HistoryScreen;
