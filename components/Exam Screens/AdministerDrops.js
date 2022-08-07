import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,ScrollView, Image} from 'react-native';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';
import Proparacaine from '../../assets/images/dropper_1.png';
import Tropicamide from '../../assets/images/dropper_2.png';

const AdministerDrops = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('TestVA')}>
            <View style={styles.linkLeft}>
              <Ionicons style={styles.iconLeft} name="chevron-back" size={30} color={colors.darkblue}/>
              <Text style={styles.textLeft}>Test Visual Acuity</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBox} onPress={() => navigation.navigate('HOME')}>
            <View style={styles.linkRight}>
              <Text style={styles.textRight}>Home</Text>
              <Ionicons style={styles.iconRight} name="chevron-forward" size={30} color={colors.darkblue}/>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>EXAM</Text>
          <Text style={styles.subtitle}>
            Administer Eye Drops
          </Text>
        </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            numbing
          </Text>
          <Image source={Proparacaine} style={styles.image}/>
          <Text style={styles.textSection}>
            Proparacaine
          </Text>
          <Text style={styles.subTextSection}>
            Use these to numb eyes before administering
            dilating drops. Can also be used in fluoroscein 
            tests.
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            Uncap your drops and sanitize your hands
          </Text>
          <Text style={styles.subTextSection}>
            before touching the patient
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            Tell the patient you'll be putting
            drops in their eyes
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            Voy a poner gotas en sus ojos
          </Text>
          <Text style={styles.subTextSection}>
            I'm going to be putting drops in your eyes
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            Gently pull the lower eyelid out
          </Text>
          <Text style={styles.subTextSection}>
            creating a pocket between the eyeball and
            lower eyelid
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            Put 1 drop in between the eyeball and 
            lower eyelid
          </Text>
          <Text style={styles.subTextSection}>
            without touching the patient
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            dilating
          </Text>
          <Image source={Tropicamide} style={styles.image}/>
          <Text style={styles.textSection}>
            Tropicamide
          </Text>
          <Text style={styles.subTextSection}>
            These take 30 minutes to work
            - plan accordingly.
          </Text>
        </View>
        <View style={styles.textSectionBox}>
          <Text style={styles.textSection}>
            Repeat the above steps for
            the Tropicamide drops
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
    image: {
        height: 186,
        width: 75,
        marginBottom: 12
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
        fontSize: 18,
        color: colors.darkblue,
        fontFamily: 'OpenSansBold',
        textAlign: 'center',
        marginHorizontal: 10,
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
        color: colors.grey,
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
        alignItems: 'center'
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

export default AdministerDrops;
