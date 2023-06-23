import {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Pressable,
  Keyboard,
  Alert,
} from 'react-native';

import Colors from '../assets/colors';
import {TextInput} from 'react-native-paper';

import app from '../Firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const auth = getAuth(app);

  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const res = await AsyncStorage.getItem('user');
      const userInfo = JSON.parse(res);
      if (userInfo.isLoggedIn) {
        navigation.navigate('BottomNav');
      }
    } catch (error) {
      console.log('Error checking login status:', error);
    }
  };

  const validateField = value => {
    return value.trim() !== '';
  };

  const handleLogin = async () => {
    const isValid =
      validateField(details.email) && validateField(details.password);

    if (isValid) {
      signInWithEmailAndPassword(auth, details.email, details.password)
        .then(async userCredential => {
          // User login successful
          const user = userCredential.user;
          console.log('User logged in:', user.uid);
          setDetails({});
          await AsyncStorage.setItem(
            'user',
            JSON.stringify({
              isLoggedIn: true,
              id: user.uid,
              email: details.email,
            }),
          );
          navigation.navigate('BottomNav');
        })
        .catch(error => {
          console.log('Error logging in:', error);
          setDetails({});
          Alert.alert('Error', 'Invalid Credentials.');
        });
    } else {
      Alert.alert('Error', 'Please fill all the required fields.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/img/logo.png')}
          style={{width: 100, height: 100}}
        />
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subheading}>Log in to continue</Text>
      </View>

      <Pressable onPress={Keyboard.dismiss} style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="Enter your email"
          value={details.email}
          onChangeText={text => setDetails({...details, email: text})}
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
        <TextInput
          secureTextEntry
          mode="outlined"
          placeholder="Enter your password"
          value={details.password}
          onChangeText={text => setDetails({...details, password: text})}
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
        <Text
          style={styles.forgetPassBtn}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forget password?
        </Text>
      </Pressable>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.textView}>
        <Text style={styles.newMemberText}>New Member?</Text>
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={styles.registerText}>
          Register now
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  inputContainer: {
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 20,
  },
  inputField: {
    backgroundColor: Colors.inputfieldgrey,
    marginVertical: 10,
    height: 50,
  },
  forgetPassBtn: {
    alignSelf: 'flex-end',
    fontSize: 15,
    marginTop: -5,
    color: Colors.peach,
    fontFamily: 'Raleway-SemiBold',
  },
  heading: {
    color: Colors.black,
    fontSize: 30,
    fontFamily: 'Raleway-Bold',
  },
  subheading: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: 'Raleway-Medium',
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
  },
  newMemberText: {
    color: Colors.black,
    fontSize: 14,
    marginRight: 5,
    marginTop: 12,
    fontFamily: 'Raleway-Medium',
  },
  registerText: {
    marginTop: 12,
    fontSize: 14,
    color: Colors.peach,
    fontFamily: 'Raleway-Bold',
  },
});
