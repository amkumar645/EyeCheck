import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>ABOUT</Text>
          <Text style={styles.subtitle}>
            Originated by Soryan Kumar,{"\n"}
            Alpert Medical School Class of 2025
          </Text>
          <Text style={styles.subtitle}>
            Developed by Arnav Kumar,{"\n"}
            Princeton University Class of 2024
          </Text>
          <Text style={styles.subtitle}>
            Designed by Anagha Lokhande,{"\n"}
            Alpert Medical School Class of 2025
          </Text>
          <Text style={styles.subtitle}>
            Clinical Advisory {"\n"}
            from Jamie Schaefer, MD
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            EyeCheck was originally designed to assist
            new Ophthalmology Clinic volunteers at
            Clínica Esperanza/Hope Clinic in Providence,
            Rhode Island
          </Text>
          <Text style={styles.description}>
            It is intended to guide health sciences
            students and trainees through basic
            ophthalmological intake procedures and provide
            Spanish translation assistance.
          </Text>
          <Text style={styles.description}>
            It is not intended to take the place of
            a certified Spanish translator and is only
            attended for use under the supervision of
            a board-certified ophthalmologist. It is
            not intended for patient use nor to diagnose,
            treat, or cure any disease.
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
            <Text style={styles.footer}>
                <Ionicons name="chevron-back" size={18} color={colors.darkblue}/>
                Home
            </Text>
          </TouchableOpacity>
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
      fontSize: Platform.OS === "android" ? 18: 18,
      fontFamily: 'OpenSans',
      marginBottom: 10,
      color: colors.darkerblue,
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
    subtitle: {
        fontSize: Platform.OS === "android" ? 18: 18,
        fontFamily: 'Copperplate',
        color: colors.darkerblue,
        textAlign: 'center',
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

export default AboutScreen;