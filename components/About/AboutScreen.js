import { Platform, StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView,ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.links}>
        <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('HOME')}>
          <View style={styles.linkLeft}>
            <Ionicons style={styles.iconLeft} name="chevron-back" size={30} color={colors.darkblue}/>
            <Text style={styles.textLeft}>Home</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('HOME')}>
            <View style={styles.linkRight}>
              <Text style={styles.textRight}></Text>
            </View>
          </TouchableOpacity>
        </View>
      <View>
      <Text style={styles.title}>ABOUT</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow : 1, alignItems : 'center'}} style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View>
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
            Research Support by Spandana Jarmale,{"\n"}
            Alpert Medical School Class of 2024
          </Text>
          <Text style={styles.subtitle}>
            Clinical Advisory {"\n"}
            from Jamie Schaefer, MD
          </Text>
          <Text style={styles.subtitle}>
            Funded by {"\n"}
            the Brown Medical Alumni Association
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
          EyeCheck was created to assist
          medical student volunteers
          at the Ophthalmology Service
          of Clínica Esperanza
          in Providence, Rhode Island.
          </Text>
          <Text style={styles.description}>
          It is intended to guide health sciences
          students and trainees through basic
          ophthalmological intake procedures and
          provide Spanish translation assistance.
          </Text>
          <Text style={styles.description}>
          It is not intended to take the place
          of a certified Spanish translator and
          is only attended for use under the
          supervision of a board-certified
          ophthalmologist. It is not intended
          for patient use, nor to diagnose, treat, or
          cure any disease.
          </Text>
          <Text style={styles.description}>
          The eye diagram in the
          Ophthalmology Glossary is available for use
          under Creative Commons license. The
          definitions in the Ophthalmology Glossary
          are adapted from
          Introducing Ophthalmology:
          a primer for office staff from the
          American Academy of Ophthalmology.
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
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    description: {
      fontSize: 16,
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
    iconLeft: {
      width: '15%'
    },
    linkBox: {
      width: '50%',
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
    textLeft: {
      fontSize: Platform.OS === "android" ? 16: 18,
      color: colors.darkblue,
      fontFamily: 'Copperplate',
      textAlign: 'left',
      width: '85%'
    },
    title: {
        fontSize: Platform.OS === "android" ? 60: 70,
        marginBottom: 20,
        color: colors.darkerblue,
        fontFamily: 'Copperplate',
        textAlign: 'center'
    },
});

export default AboutScreen;
