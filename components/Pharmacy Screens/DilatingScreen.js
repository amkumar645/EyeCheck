import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,ScrollView, Image} from 'react-native';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';
import Tropicamide from '../../assets/images/dilating_drops.png';


const DilatingScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('PharmacyMenu')}>
            <View style={styles.linkLeft}>
              <Ionicons style={styles.iconLeft} name="chevron-back" size={30} color={colors.darkblue}/>
              <Text style={styles.textLeft}>Pharmacy Main</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox}>
            <View style={styles.linkRight}>
              <Text style={styles.textRight}></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Pharmacy</Text>
          <Text style={styles.subtitle}>
            Dilating Drops
          </Text>
          <Text style={styles.subtitle}>
            Tropicamide
          </Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow : 1, alignItems : 'center'}} style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Image source={Tropicamide} style={styles.image}></Image>
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              use
            </Text>
            <Text style={styles.textSection2}>
              after numbing drops and in most procedures
              where you need to touch the patient's eye
            </Text>
            <Text style={styles.textSection3}>
              examples: tonometry applanation to check intraocular
              pressure & fluorescein staining to check dry eye
            </Text>
          </View>
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              best practices
            </Text>
            <Text style={styles.textSection2}>
              1) tell the patient you'll be putting in eye drops
              {"\n"}
              2) hand the patient a tissue to dry their eyes
              {"\n"}
              3) wait 30 minutes to allow these drops to work
            </Text>
          </View>
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              warning
            </Text>
            <Text style={styles.textSection2}>
              these drops may sting
              patients with dry or sensitive eyes
              {"\n"}
              (but they're safe to use!)
            </Text>
          </View>
          <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              see the Exam section
            </Text>
            <Text style={styles.textSection2}>
              for instructions on administering drops
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
        width: 115,
        marginBottom: 30
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
        fontSize: Platform.OS === "android" ? 30: 35,
        marginBottom: 5,
        color: colors.darkerblue,
        fontFamily: 'Copperplate',
        textAlign: 'center'
    },
    text: {
      fontFamily: 'OpenSans',
      fontSize: Platform.OS === "android" ? 18: 18,
    },
    textBold: {
      fontFamily: 'OpenSansBold',
      fontSize: Platform.OS === "android" ? 18: 18,
    },
    textSection: {
        fontSize: 17,
        color: colors.darkerblue,
        fontFamily: 'OpenSansBold',
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5
    },
    textSection2: {
        fontSize: 17,
        color: colors.grey,
        fontFamily: 'OpenSans',
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 50
    },
    textSection3: {
        fontSize: 14,
        color: colors.grey,
        fontFamily: 'OpenSans',
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 50,
    },
    textSectionBox: {
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: 'white',
        borderRadius: 5,
        width: 323,
        minHeight: 84,
        marginBottom: 20,
    },
    textView: {
      flexDirection: 'row',
      marginBottom: 30,
    },
    textView2: {
      flexDirection: 'row',
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

export default DilatingScreen;
