import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

const InspectEyesScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('ExamMenu')}>
            <View style={styles.linkLeft}>
              <Ionicons style={styles.iconLeft} name="chevron-back" size={30} color={colors.darkblue}/>
              <Text style={styles.textLeft}>Exam Main</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('ExamMenu')}>
            <View style={styles.linkRight}>
              <Text style={styles.textRight}>Test Visual Fields</Text>
              <Ionicons style={styles.iconRight} name="chevron-forward" size={30} color={colors.darkblue}/>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>EXAM</Text>
          <Text style={styles.subtitle}>
            INSPECT EYELIDS {"\n"}
            & EYEBALLS
          </Text>
        </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            Tell the patient you'll be inspecting their eyes and ask for permission
            to touch their eyelids
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            Voy a examinar sus ojos. {"\n"}
            ¿Puedo bajar sus párpados?
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            I'm going to be examining your eyes. {"\n"}
            May I touch your eyelids?
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            Examine from the outside in: {"\n"}
            start with the eyelids and eyelashes, then the sclera, then then
            cornea/iris/pupils
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            As you progress in your training, {"\n"}
            you'll learn to identify findings characteristic of different
            disease — for now, just note anything unusual you see
          </Text>
        </View>
        </ScrollView>
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
    examSection: {
        fontSize: 17,
        color: colors.darkblue,
        fontFamily: 'OpenSansBold',
        textAlign: 'center',
        marginLeft: 2,
        marginRight: 2,
        marginTop: 12,
        marginBottom: 12
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
    iconLeft: {
      width: '15%'
    },
    iconRight: {
      width: '15%'
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
    linkRight: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    linkBox: {
      width: '50%',
    },
    logo: {
        height: 172,
        width: 154,
        marginBottom: 30,
    },
    scrollView: {
        flex: 1,
        backgroundColor: colors.bgwhite,
        marginLeft: 10,
        marginRight: 10,
    },
    section: {
        fontSize: 20,
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
    subTextSection: {
        fontSize: 18,
        color: 'gray',
        fontFamily: 'OpenSans',
        textAlign: 'center',
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 12
    },
    subtitle: {
        fontSize: Platform.OS === "android" ? 30: 35,
        marginBottom: 30,
        color: colors.darkerblue,
        fontFamily: 'Copperplate',
        textAlign: 'center'
    },
    textSection: {
        fontSize: 18,
        color: colors.darkerblue,
        fontFamily: 'OpenSansBold',
        textAlign: 'center',
        marginLeft: 4,
        marginRight: 4,
        marginTop: 12,
        marginBottom: 12
    },
    textSectionBox: {
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: 'white',
        borderRadius: 5,
        width: 323,
        minHeight: 84,
        justifyContent: 'center',
        marginBottom: 20,
    },
    textLeft: {
      fontSize: Platform.OS === "android" ? 16: 18,
      color: colors.darkblue,
      fontFamily: 'Copperplate',
      textAlign: 'left',
      width: '85%'
    },
    textRight: {
      fontSize: Platform.OS === "android" ? 16: 18,
      color: colors.darkblue,
      fontFamily: 'Copperplate',
      textAlign: 'right',
      width: '85%'
    },
    title: {
        fontSize: Platform.OS === "android" ? 60: 70,
        marginTop: Platform.OS === "android" ? 30: 30,
        marginBottom: 20,
        color: colors.darkerblue,
        fontFamily: 'Copperplate',
        textAlign: 'center'
    },
});

export default InspectEyesScreen;
