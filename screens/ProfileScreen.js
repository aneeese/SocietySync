import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import {useState, useEffect} from 'react';
import Colors from '../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserInfo from '../components/UserInfo';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({navigation}) {
  const [userDetails, setUserDetails] = useState({});
  const [userEmail, setEmail] = useState('');

  const defaultImage = "https://www.pngkit.com/png/detail/797-7975330_donna-picarro-dummy-avatar-png.png";

  useEffect(() => {
    checkLoginStatus();
    fetchRealtimeData();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const res = await AsyncStorage.getItem('user');
      const userInfo = JSON.parse(res);
      if (userInfo.isLoggedIn) {
        console.log(userInfo);
        setEmail(userInfo.email);
      }
    } catch (error) {
      console.log('Error checking login status:', error);
    }
  };

  const fetchRealtimeData = async () => {
    try {
      const response = await fetch('https://societysync-2e49a-default-rtdb.firebaseio.com/users.json');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      const userKey = Object.keys(data);
      setUserDetails(data[userKey]);
      await AsyncStorage.setItem('userDB_ID', userKey[0]);
      //console.log(userKey[0]);
    } catch (error) {
      console.log('Error fetching data:', error.message);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.peach} barStyle="dark-content" />
        <Image
          source={{uri: !!userDetails.picture ? userDetails.picture : defaultImage}}
          style={styles.image}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.heading}>{userDetails.name}</Text>
          <Text style={styles.subheading}>{userDetails.position}</Text>

          <View style={styles.contactContainer}>
            <View style={styles.emailContainer}>
              <Icon
                style={{paddingTop: 2.5}}
                name="send"
                size={16}
                color={Colors.peach}
              />
              <Text style={styles.contactInfo}>{userEmail}</Text>
            </View>

            <View style={styles.phoneContainer}>
              <Icon
                style={{paddingTop: 2.5}}
                name="phone"
                size={16}
                color={Colors.peach}
              />
              <Text style={styles.contactInfo}>{userDetails.contact}</Text>
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <UserInfo field="Date of Birth" data={userDetails.dateOfBirth} />
            <UserInfo field="Gender" data={userDetails.gender} />
            <UserInfo field="Password" data="*******" />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.btnText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginTop: 125,
    backgroundColor: Colors.white,
    width: '90%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: -60,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: Colors.black,
    fontFamily: 'Raleway-Bold',
    fontSize: 25,
  },
  subheading: {
    color: Colors.grey,
    fontFamily: 'Raleway-Italic',
    fontSize: 16,
    marginTop: 2,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.horizontalBar,
    borderBottomColor: Colors.horizontalBar,
    paddingVertical: 10,
  },
  emailContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  phoneContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contactInfo: {
    color: Colors.black,
    fontFamily: 'Raleway-Medium',
    fontSize: 13,
    marginLeft: 5,
  },
  button: {
    backgroundColor: Colors.peach,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 60,
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
});
