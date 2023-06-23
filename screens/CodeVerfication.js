import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Colors from '../assets/colors';
import DigitContainer from '../components/DigitContainer';

const CodeVerfication = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.peach} barStyle="light-content" />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Almost there!</Text>
        <Text style={styles.subheading}>
          Please enter the 6-digit code sent to your email for verification.
        </Text>
      </View>
      <View style={styles.codeFields}>
        <DigitContainer text={6} />
        <DigitContainer text={9} />
        <DigitContainer text={7} />
        <DigitContainer text={5} />
        <DigitContainer text={4} />
        <DigitContainer text={9} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>

      <View style={{alignItems: 'center'}}>
        <View style={styles.textView}>
          <Text style={styles.notReceivedText}>Didn’t receive any code?</Text>
          <Text
            onPress={() => Alert.alert('Home Screen')}
            style={styles.resendText}>
            Resend Again
          </Text>
        </View>
        <Text style={styles.timerText}>Request new code in 30s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 60,
    marginBottom: 7,
    marginHorizontal: 30,
  },
  heading: {
    color: Colors.black,
    fontSize: 27,
    marginBottom: 27,
    fontFamily: 'Raleway-SemiBold',
  },
  subheading: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: 'Raleway-Medium',
  },
  codeFields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35,
    marginTop: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  btnText: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Raleway-SemiBold',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  notReceivedText: {
    color: Colors.black,
    fontSize: 14,
    marginRight: 5,
    marginTop: 12,
    fontFamily: 'Raleway-Bold',
  },
  resendText: {
    marginTop: 12,
    fontSize: 14,
    color: Colors.peach,
    fontFamily: 'Raleway-Bold',
  },
  timerText: {
    marginBottom: 40,
    fontFamily: 'Raleway-Regular',
  },
});

export default CodeVerfication;
