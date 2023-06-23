import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

import Colors from '../assets/colors';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LandingPage({navigation}) {
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const res = await AsyncStorage.getItem('user');
      const userInfo = JSON.parse(res);
      if (userInfo.isLoggedIn) {
        navigation.navigate("BottomNav");
      }
    } catch (error) {
      console.log('Error checking login status:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/img/hero-icon.png')}
          style={{width: 300, height: 230}}
        />
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.subheading}>SocietySync!</Text>
        <Text style={styles.maintext}>
          Manage your society’s teams, events, and volunteers with ease.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginBtnText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 65,
  },
  heading: {
    marginTop: 7,
    fontSize: 30,
    color: Colors.blue,
    fontFamily: 'Raleway-SemiBold',
  },
  subheading: {
    marginTop: -10,
    fontSize: 40,
    color: Colors.peach,
    fontFamily: 'Raleway-Bold',
  },
  maintext: {
    margin: 15,
    fontSize: 18,
    fontFamily: 'Raleway-MediumItalic',
    color: Colors.blue,
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Raleway-SemiBold',
  },
  loginButton: {
    borderWidth: 2,
    borderColor: Colors.blue,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    fontSize: 20,
    color: Colors.blue,
    fontFamily: 'Raleway-SemiBold',
  },
});
