import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,ScrollView} from 'react-native';
import {useState} from 'react';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';


const FHScreen = ({ navigation }) => {

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
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('PMH')}>
            <View style={styles.linkLeft}>
              <Ionicons style={styles.iconLeft} name="chevron-back" size={30} color={colors.darkblue}/>
              <Text style={styles.textLeft}>Past Medical History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('EXAM')}>
            <View style={styles.linkRight}>
              <Text style={styles.textRight}>Exam Main</Text>
              <Ionicons style={styles.iconRight} name="chevron-forward" size={30} color={colors.darkblue}/>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>
            FAMILY & SOCIAL HISTORY
          </Text>
        </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        <View style={styles.textSectionBox}>
        {spanFlag &&
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            Does anyone in your immediate family have:{"\n"}
            blindness,{"\n"}
            glaucoma,{"\n"}
            macular degeneration,{"\n"}
            strabismus,{"\n"}
            retinal detachment,{"\n"}
            or eye cancer?
          </Text>
          }
          {!spanFlag &&
            <Text style={styles.textSection}>
              <Text>{" "}</Text>
              ¿Tiene parientes con:{"\n"}
              cegera, glaucoma,{"\n"}
              degeneración macular,{"\n"}
              estrabismo,{"\n"}
              desprendimiento de retina,{"\n"}
              o tumor ocular?
            </Text>
            }
            {!spanFlag &&
              <Text style={styles.subTextSection}>
                <Text>{" "}</Text>
                Does anyone in your immediate family have:
                blindness,
                glaucoma,
                macular degeneration,
                strabismus,
                retinal detachment,
                or eye cancer?
              </Text>
            }
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Do you drink alcohol?' : '¿Bebe alcohol?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'if yes, ask about how much in a week' : 'Do you drink alcohol?'}
          </Text>
        </View>
        {!spanFlag &&
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              <Text>{" "}</Text>
              ¿Con que frequencia bebe alcohol?
            </Text>
            <Text style={styles.subTextSection}>
              <Text>{" "}</Text>
              How often do you drink alcohol?
            </Text>
          </View>
        }
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Do you smoke or use tobacco products?' : '¿Fuma o usa tabaco?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'if yes, ask about how many in a week' : 'Do you smoke or use tobacco products?'}
          </Text>
        </View>
        {!spanFlag &&
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              <Text>{" "}</Text>
              ¿Con que frequencia usa tabaco?
            </Text>
            <Text style={styles.subTextSection}>
              <Text>{" "}</Text>
              How often do you use tabaco?
            </Text>
          </View>
        }
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'Are you currently working?' : '¿Está empleado?'}
          </Text>
          <Text style={styles.subTextSection}>
            <Text>{" "}</Text>
            {spanFlag ? 'if yes, ask where and note if their job involves potential hazards to the eyes (like construction) or irritating chemicals (like cleaning)' : 'Are you currently working?'}
          </Text>
        </View>
        {!spanFlag &&
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              <Text>{" "}</Text>
              ¿En qué trabaja?
            </Text>
            <Text style={styles.subTextSection}>
              <Text>{" "}</Text>
              What is your current job?
            </Text>
          </View>
        }
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
        marginTop: 30,
        marginBottom: 10,
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

export default FHScreen;
