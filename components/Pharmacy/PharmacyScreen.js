import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image} from 'react-native';
import { colors } from '../utils/colors';
import Proparacaine from '../../assets/images/dropper_1.png';
import Tropicamide from '../../assets/images/dropper_2.png';
import Prednisolone from '../../assets/images/dropper_3.png';
import Timolol from '../../assets/images/dropper_4.png';


const PharmacyScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>PHARMACY</Text>
            <Text style={styles.description}>
              Quick info on the most common meds you'll need for your exam and the ones 
              your patient may be using. Tap each icon for more.
            </Text>
          </View>
          <View style={styles.dropperContainer}>
            <View style={styles.item}>
              <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
                <Text style={styles.section}>
                  numbing
                </Text>
                <Image
                  style={styles.image}
                  source={Proparacaine}
                />
                <Text style={styles.sectionSubtitle}>
                  Proparacaine
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
                <Text style={styles.section}>
                  dilating
                </Text>
                <Image
                  style={styles.image}
                  source={Tropicamide}
                />
                <Text style={styles.sectionSubtitle}>
                  Tropicamide
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
                <Text style={styles.section}>
                  steroid
                </Text>
                <Image
                  style={styles.image}
                  source={Prednisolone}
                />
                <Text style={styles.sectionSubtitle}>
                  Prednisolone
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.sectionBox} onPress={() => navigation.goBack()}>
                <Text style={styles.section}>
                  glaucoma
                </Text>
                <Image
                  style={styles.image}
                  source={Timolol}
                />
                <Text style={styles.sectionSubtitle}>
                  Timolol
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.sectionBoxBottom} onPress={() => navigation.goBack()}>
            <Text style={styles.sectionBottom}>
              Came here from Past Medical History?
              Tap to go back
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: colors.bgwhite,
          alignItems: 'center',
          marginTop: Platform.OS === "android" ? 60: 80,
      },
      dropperContainer: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
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
      item: {
        width: '50%',
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
        borderWidth: 2,
        borderColor: colors.darkblue,
        backgroundColor: colors.lightblue,
        borderRadius: 5,
        width: 170,
        minHeight: 170,
        marginBottom: 20,
        marginHorizontal: Platform.OS === "android" ? 12: 20,
        alignItems: 'center',
      },
      sectionBoxBottom: {
        borderWidth: 2,
        borderColor: colors.darkblue,
        backgroundColor: colors.lightblue,
        borderRadius: 5,
        width: 323,
        minHeight: 58,
        marginBottom: Platform.OS === "android" ? 100: 120
      },
      sectionSubtitle: {
        fontSize: Platform.OS === "android" ? 17: 17,
        color: colors.darkblue,
        fontFamily: 'OpenSans',
        textAlign: 'center',
        marginLeft: 2,
        marginRight: 2
      },
      title: {
          fontSize: Platform.OS === "android" ? 50: 60,
          marginBottom: 30,
          color: colors.darkerblue,
          fontFamily: 'Copperplate',
          textAlign: 'center'
      },
  });

export default PharmacyScreen;
