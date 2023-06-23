import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
  StatusBar
} from 'react-native';
import Colors from '../assets/colors';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';

const ResetPassword = ({navigation}) => {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.peach} barStyle="light-content" />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Reset Password</Text>
        <Text style={styles.subheading}>Please enter your new password.</Text>
      </View>
      <Pressable onPress={Keyboard.dismiss} style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="New Password"
          value={passwords.newPassword}
          onChangeText={text => setPasswords({...passwords, newPassword: text})}
          right={<TextInput.Icon icon="lock-outline" iconColor="#C6C6C6" />}
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
        <TextInput
          mode="outlined"
          placeholder="Confirm Password"
          value={passwords.confirmPassword}
          onChangeText={text =>
            setPasswords({...passwords, confirmPassword: text})
          }
          right={<TextInput.Icon icon="lock-outline" iconColor="#C6C6C6" />}
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Submit</Text>
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
    fontSize: 24,
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
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Raleway-SemiBold',
  },
});

export default ResetPassword;
