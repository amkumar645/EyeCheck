import { Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import Proparacaine from '../../assets/images/numb_drops-modified.png';
import Tropicamide from '../../assets/images/dilating_drops.png';
import Prednisolone from '../../assets/images/steroid_drops.png';
import Timolol from '../../assets/images/glaucoma_drops.png';


const PharmacyMenuScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow : 1, alignItems : 'center'}} style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.title}>PHARMACY</Text>
            <Text style={styles.description}>
              Quick info on the most common meds you'll need for your exam and the ones
              your patient may be using. Tap each icon for more.
            </Text>
          </View>
          <View style={styles.dropperContainer}>
            <View style={styles.item}>
              <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("Numbing")}>
                <Text style={styles.section}>
                  numbing
                </Text>
                <Image
                  style={styles.image1}
                  source={Proparacaine}
                />
                <Text style={styles.sectionSubtitle}>
                  Proparacaine & others
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("Dilating")}>
                <Text style={styles.section}>
                  dilating
                </Text>
                <Image
                  style={styles.image2}
                  source={Tropicamide}
                />
                <Text style={styles.sectionSubtitle}>
                  Tropicamide & others
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("Steroid")}>
                <Text style={styles.section}>
                  steroid
                </Text>
                <Image
                  style={styles.image2}
                  source={Prednisolone}
                />
                <Text style={styles.sectionSubtitle}>
                  Prednisolone
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.navigate("Glaucoma")}>
                <Text style={styles.section}>
                  glaucoma
                </Text>
                <Image
                  style={styles.image4}
                  source={Timolol}
                />
                <Text style={styles.sectionSubtitle}>
                  Timolol & others
                </Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={styles.container}>
            <View style={styles.textSectionBox}>
            <Text style={styles.textSection}>
              best practices
            </Text>
            <Text style={styles.textSection2}>
            1) tell the patient you’ll be putting in eye drops {'\n'} {'\n'}
            2) hand the patient a tissue to dry their eyes {'\n'} {'\n'}
            3) if you’re putting in more drops after (like dilating drops) wait 60 seconds to allow the first drops to work
            </Text>
            </View>
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
      },
      scrollView: {
          backgroundColor: colors.bgwhite,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 30,
          marginBottom: 70,
      },
      dropperContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
      image: {
          height: 100,
          width: 60,
          marginVertical: 6
      },
      image1: {
        height: 100,
        width: 80,
        marginVertical: 6
      },
      image2: {
        height: 100,
        width: 100,
        marginVertical: 6
      },
      image4: {
        height: 100,
        width: 40,
        marginVertical: 6
      },
      item: {
        width: '50%',
        flexGrow: 1,
        alignItems: 'center'
      },
      section: {
          fontSize: Platform.OS === "android" ? 17: 17,
          color: colors.darkblue,
          fontFamily: 'OpenSansBold',
          textAlign: 'center',
          marginLeft: 2,
          marginRight: 2
      },
      sectionBottom: {
        fontSize: Platform.OS === "android" ? 17: 20,
        color: colors.darkblue,
        fontFamily: 'OpenSansBold',
        textAlign: 'center',
        marginHorizontal: 5,
        marginVertical: 5
      },
      sectionBox: {
        borderWidth: 1,
        borderColor: colors.darkblue,
        backgroundColor: colors.lightblue,
        borderRadius: 5,
        width: 170,
        minHeight: 170,
        marginBottom: 20,
        //marginHorizontal: Platform.OS === "android" ? 12: 20,
        alignItems: 'center',
      },
      sectionBoxBottom: {
        borderWidth: 1,
        borderColor: colors.darkblue,
        backgroundColor: colors.lightblue,
        borderRadius: 5,
        width: 323,
        minHeight: 58,
        //marginBottom: Platform.OS === "android" ? 100: 120
      },
      sectionSubtitle: {
        fontSize: Platform.OS === "android" ? 17: 17,
        color: colors.darkblue,
        fontFamily: 'OpenSans',
        textAlign: 'center',
        marginLeft: 2,
        marginRight: 2
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
          fontSize: Platform.OS === "android" ? 50: 60,
          marginBottom: 30,
          color: colors.darkerblue,
          fontFamily: 'Copperplate',
          textAlign: 'center'
      },
  });

export default PharmacyMenuScreen;
