import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
  StatusBar,
  Alert,
} from 'react-native';
import Colors from '../assets/colors';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';

import app from '../Firebase';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

const ForgotPassword = ({navigation}) => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [email, setEmail] = useState('');

  const sendCode = async () => {
    console.log(navigation);
    // Generate a random 6-digit verification code
    const generatedCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    try {
      // Store the verification code and email in Firestore
      const verificationRef = collection(db, '/passwordResetRequests');
      await addDoc(verificationRef, {
        email,
        verificationCode: generatedCode,
      });

      // Send the password reset email with the verification code
      await sendPasswordResetEmail(auth, email);
      setEmail('');
      Alert.alert(
        'Verification Code Sent',
        'Please check your email for the verification code.',
      );
      navigation.navigate("Login");
    } catch (error) {
      console.error('Error sending verification code:', error);
      Alert.alert(
        'Error',
        'Failed to send verification code. Please try again later.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.peach} barStyle="light-content" />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Forgot your Password?</Text>
        <Text style={styles.subheading}>
          Enter your email address and we will share a OTP code to your email.
        </Text>
      </View>
      <Pressable onPress={Keyboard.dismiss} style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
          right={<TextInput.Icon icon="email-outline" iconColor="#C6C6C6" />}
          style={styles.inputField}
          activeOutlineColor={Colors.peach}
          selectionColor={Colors.black}
          textColor={Colors.blue}
          outlineStyle={{
            borderRadius: 10,
            borderColor: Colors.inputfieldgrey,
          }}
          contentStyle={{
            fontFamily: 'Raleway-Medium',
          }}
        />
      </Pressable>
      <TouchableOpacity style={styles.button} onPress={sendCode}>
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>
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
  inputContainer: {
    justifyContent: 'center',
    marginTop: 60,
    marginHorizontal: 20,
  },
  inputField: {
    backgroundColor: Colors.inputfieldgrey,
    marginVertical: 10,
    height: 50,
  },
  heading: {
    color: Colors.black,
    fontSize: 22,
    marginBottom: 27,
    fontFamily: 'Raleway-SemiBold',
  },
  subheading: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: 'Raleway-Medium',
  },
  button: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 60,
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
});

export default ForgotPassword;
