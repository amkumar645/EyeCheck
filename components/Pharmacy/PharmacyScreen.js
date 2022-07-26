import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, ScrollView} from 'react-native';
import { colors } from '../utils/colors';
import Proparacaine from '../../assets/images/numb_drops-modified.png';
import Tropicamide from '../../assets/images/dilating_drops.png';
import Prednisolone from '../../assets/images/steroid_drops.png';
import Timolol from '../../assets/images/glaucoma_drops.png';


const PharmacyScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity style={styles.sectionBoxBottom} onPress={() => navigation.navigate('PMH')}>
            <Text style={styles.sectionBottom}>
              Came here from Past Medical History?
              Tap to go back
            </Text>
          </TouchableOpacity>
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
          marginTop: Platform.OS === "android" ? 60: 80,
          marginBottom: 120,
      },
      scrollView: {
          flex: 1,
          backgroundColor: colors.bgwhite,
          marginLeft: 10,
          marginRight: 10,
      },
      dropperContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
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
        textAlign: 'center',
        width: '50%'
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
      title: {
          fontSize: Platform.OS === "android" ? 50: 60,
          marginBottom: 30,
          color: colors.darkerblue,
          fontFamily: 'Copperplate',
          textAlign: 'center'
      },
  });

export default PharmacyScreen;