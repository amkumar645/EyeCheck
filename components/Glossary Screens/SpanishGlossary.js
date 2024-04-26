import { Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView,ScrollView, Image} from 'react-native';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

const SpanishGlossary = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('GlossaryMenu')}>
            <View style={styles.linkLeft}>
              <Ionicons style={styles.iconLeft} name="chevron-back" size={30} color={colors.darkblue}/>
              <Text style={styles.textLeft}>Glossary Main</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <View style={styles.linkRight}>
              <Text style={styles.textRight}></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>
            Spanish Glossary
          </Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow : 1, alignItems : 'center'}} style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            amblyopia
          </Text>
          <Text style={styles.textSection2}>
            la ambliopia
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            blindness
          </Text>
          <Text style={styles.textSection2}>
            la ceguera
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            cataracts
          </Text>
          <Text style={styles.textSection2}>
            las cataratas
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            crossed eyes
          </Text>
          <Text style={styles.textSection2}>
            ojos cruzados
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            eye cancer
          </Text>
          <Text style={styles.textSection2}>
            el cancer de los ojos
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            eye drops
          </Text>
          <Text style={styles.textSection2}>
            las gotas de los ojos
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            eye muscles
          </Text>
          <Text style={styles.textSection2}>
            los músculos de los ojos
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            eye trauma
          </Text>
          <Text style={styles.textSection2}>
            el trauma de los ojos
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            eyelids
          </Text>
          <Text style={styles.textSection2}>
            los párpados
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            glasses
          </Text>
          <Text style={styles.textSection2}>
            las gafas/las lentes
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            glaucoma
          </Text>
          <Text style={styles.textSection2}>
            el glaucoma
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            macular degeneration
          </Text>
          <Text style={styles.textSection2}>
            la degeneración de la mácula
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            ointment
          </Text>
          <Text style={styles.textSection2}>
            el ungüento
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            problems with the retina
          </Text>
          <Text style={styles.textSection2}>
            los problemas detrás de los ojos
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            retina
          </Text>
          <Text style={styles.textSection2}>
            la retina
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            retinal detachment
          </Text>
          <Text style={styles.textSection2}>
            el desprendimiento de la retina
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            strabismus
          </Text>
          <Text style={styles.textSection2}>
            el estrabismo
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            unusual eye movements
          </Text>
          <Text style={styles.textSection2}>
            movimientos extraños de los ojos
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
        // justifyContent: 'center',
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
    image: {
        height: 175,
        width: 115
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
    subtitle: {
        fontSize: Platform.OS === "android" ? 35: 40,
        marginBottom: 10,
        marginTop:20,
        color: colors.darkerblue,
        fontFamily: 'Copperplate',
        textAlign: 'center'
    },
    textSection: {
        fontSize: 18,
        color: colors.darkerblue,
        fontFamily: 'OpenSansBold',
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 10
    },
    textSection2: {
        fontSize: 18,
        color: colors.grey,
        fontFamily: 'OpenSans',
        textAlign: 'left',
        marginLeft: 40,
        marginBottom: 10
    },
    textSectionBox: {
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: 'white',
        borderRadius: 5,
        width: 323,
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
        marginTop: Platform.OS === "android" ? 20: 20,
        marginBottom: 5,
        color: colors.darkerblue,
        fontFamily: 'Copperplate',
        textAlign: 'center'
    },
});

export default SpanishGlossary;
