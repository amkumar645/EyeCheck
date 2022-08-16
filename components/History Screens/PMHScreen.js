import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,ScrollView} from 'react-native';
import {useState} from 'react';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';


const PMHScreen = ({ navigation }) => {

  const [spanFlag, setSpanFlag] = useState(true);

  function handleClick() {
    if (spanFlag) {
      setSpanFlag(false)
    } else{
      setSpanFlag(true)
    }
  };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('HPI')}>
            <View style={styles.linkLeft}>
              <Ionicons style={styles.iconLeft} name="chevron-back" size={30} color={colors.darkblue}/>
              <Text style={styles.textLeft}>History of Present Illness</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('FH')}>
            <View style={styles.linkRight}>
              <Text style={styles.textRight}>Family & Social History</Text>
              <Ionicons style={styles.iconRight} name="chevron-forward" size={30} color={colors.darkblue}/>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>HISTORY</Text>
          <Text style={styles.subtitle}>
            PAST MEDICAL HISTORY
          </Text>
        </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Do you have any active medical problems?' : '¿Tiene algún problema médico activo?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'ask specifically about diabetes' : 'Do you have any active medical problems?'}
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Do you have glaucoma, macular degeneration, cataracts, or amblyopia (lazy eye)?' : '¿Tiene glaucoma, degeneración macular, cataratas o ambliopía?'}
          </Text>
          {!spanFlag &&
            <Text style={styles.subTextSection}>
              <Text>{" "}</Text>
              Do you have glaucoma, macular degeneration, cataracts, or amblyopia (lazy eye)?
            </Text>
          }
        </View>
        {spanFlag &&
        <TouchableOpacity  style={styles.sectionBox} onPress={() => navigation.navigate("AdministerDrops")}>
          <Text style={styles.examSection}>
            <Text>{" "}</Text>
            does your patient have diabetes or glaucoma? your supervising physician
            may want you to administer dilating drops before continuing —
            tap for instructions on administering drops
          </Text>
        </TouchableOpacity >
      }
      {!spanFlag &&
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            ¿Tiene diabetes?
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            Do you have diabetes?
          </Text>
        </View>
      }
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Are you taking any medication?' : '¿Está tomando algún medicamento?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'ask about dosage too' : 'Are you taking any medication?'}
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Are you allergic to any medication?' : '¿Está tomando algún medicamento?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'if yes, ask about the allergic reaction' : 'Are you allergic to any medication?'}
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Do you wear glasses or contacts?' : '¿Usa lentes o lentes de contactos?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'ask about the prescription strength' : 'Do you wear glasses or contacts?'}
          </Text>
        </View>
        {!spanFlag &&
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              <Text>{" "}</Text>
              ¿Cuál es la graduación?
            </Text>
            <Text style={styles.subTextSection}>
              <Text>{" "}</Text>
              What is the prescription strength?
            </Text>
          </View>
        }
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'When was your last eye exam?' : '¿Cuándo fue su último examen de la vista?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'if they can remember, ask the patient about the results of that exam' : 'When was your last eye exam?'}
          </Text>
        </View>
        {!spanFlag &&
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              <Text>{" "}</Text>
              ¿Que fueron los resultados de su último examen de la vista?
            </Text>
            <Text style={styles.subTextSection}>
              <Text>{" "}</Text>
              What were the results of your last eye exam?
            </Text>
          </View>
        }
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Have you ever had eye surgery?' : '¿Tuvo algún láser en los ojos o algunas cirugías?'}
          </Text>
          {!spanFlag &&
            <Text style={styles.subTextSection}>
              <Text>{" "}</Text>
              Have you ever had eye surgery?
            </Text>
          }
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Have you ever had any serious eye injuries?' : '¿Tuvo algún trauma de los ojos?'}
          </Text>
          {!spanFlag &&
            <Text style={styles.subTextSection}>
              <Text>{" "}</Text>
              Have you ever had any serious eye injuries?
            </Text>
          }
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Are you currently using any eye drops or ointments?' : '¿Está usando gotas para los ojos o ungüentos?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'not sure about the names of the eye medications? tap Pharmacy below' : 'Are you currently using any eye drops or ointments?'}
          </Text>
        </View>
        <TouchableOpacity  style={styles.sectionBox} onPress={handleClick}>
          <Text style={styles.section}>
            <Text>{" "}</Text>
            {spanFlag ? 'Spanish translation' : 'English translation'}
          </Text>
        </TouchableOpacity >
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

export default PMHScreen;
