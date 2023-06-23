import {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Keyboard,
  Alert,
} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker';
import {TextInput, Avatar} from 'react-native-paper';
import Colors from '../assets/colors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';

import app from '../Firebase';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, push} from 'firebase/database';

export default function Signup({navigation}) {
  const auth = getAuth(app);
  const db = getDatabase();

  const [details, setDetails] = useState({
    name: '',
    email: '',
    gender: '',
    contact: '',
    position: '',
    password: '',
    password2: '',
  });
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const defaultImage = "https://www.pngkit.com/png/detail/797-7975330_donna-picarro-dummy-avatar-png.png"
  const [selectImage, setSelectImage] = useState(defaultImage);

  const positions = ['Event Management', 'Content', 'Media', 'Graphics'];

  const validateField = value => {
    return value.trim() !== '';
  };

  const isValid = () => {
    console.log(date.toLocaleDateString());
    return (
      validateField(details.name) &&
      validateField(details.email) &&
      validateField(details.gender) &&
      validateField(details.contact) &&
      validateField(details.position) &&
      validateField(details.password) &&
      validateField(details.password2) &&
      validateField(date.toLocaleDateString())
    );
  };

  const handleRegister = async () => {
    if (isValid()) {
      if (details.password == details.password2) {
        createUserWithEmailAndPassword(auth, details.email, details.password)
          .then(userCredential => {
            // User creation successful
            const user = userCredential.user;
            console.log('User created:', user.uid);
            setTimeout(() => {
              setDetails({});
              navigation.navigate('Login');
            }, 2000);
            // Storing additional user data in Realtime Database
            const userData = {
              name: details.name,
              gender: details.gender,
              contact: details.contact,
              dateOfBirth: date.toLocaleDateString(),
              position: details.position,
              picture: selectImage,
            };

            const usersRef = ref(db, 'users');
            push(usersRef, {uid: user.uid, ...userData})
              .then(() => {
                console.log('Additional user data stored in Realtime Database');
              })
              .catch(error => {
                console.log('Error storing additional user data:', error);
              });
          })
          .catch(error => {
            Alert.alert('Error', 'An error occurred.');
            console.log('Error creating user:', error);
          });
      } else {
        Alert.alert('Error', 'Both passwords do not match.');
      }
    } else {
      Alert.alert('Error', 'Please fill all the required fields.');
    }
  };

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image'
      }
    };

    launchImageLibrary(options, Response => {
      setSelectImage(Response.assets[0].uri);
      console.log(Response.assets[0].uri);
    })
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/img/logo.png')}
            style={{width: 80, height: 80}}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Get Started</Text>
        <Text style={styles.subheading}>by creating a free account.</Text>
      </View>

      <TouchableOpacity style={styles.avatarContainer} onPress={() => ImagePicker()}>
        <Avatar.Image size={80} source={{uri: selectImage}} />
      </TouchableOpacity>

      <Pressable onPress={Keyboard.dismiss} style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="Full Name"
          value={details.name}
          onChangeText={text => setDetails({...details, name: text})}
          right={<TextInput.Icon icon="account-outline" iconColor="#C6C6C6" />}
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
          placeholder="Valid Email"
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            mode="outlined"
            onPressIn={() => setOpen(true)}
            placeholder="Date of Birth"
            value={date.toLocaleDateString()}
            onChangeText={text => setDetails({...details, dateOfBirth: text})}
            showSoftInputOnFocus={false}
            right={
              <TextInput.Icon
                icon="calendar-blank-outline"
                iconColor="#C6C6C6"
              />
            }
            style={styles.halfField}
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
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <TextInput
            mode="outlined"
            placeholder="Gender"
            value={details.gender}
            onChangeText={text => setDetails({...details, gender: text})}
            style={styles.halfField}
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
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            mode="outlined"
            placeholder="Contact"
            value={details.contact}
            onChangeText={text => setDetails({...details, contact: text})}
            right={<TextInput.Icon icon="cellphone" iconColor="#C6C6C6" />}
            style={styles.halfField}
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
          <SelectDropdown
            data={positions}
            onSelect={text => setDetails({...details, position: text})}
            defaultButtonText={details.position}
            defaultValue={details.position}
            buttonStyle={[
              styles.inputField,
              {
                width: '48%',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginTop: 15,
              },
            ]}
            buttonTextStyle={{
              fontFamily: 'Raleway-Medium',
              textAlign: 'left',
              color: Colors.blue,
              fontSize: 16,
            }}
            renderDropdownIcon={isOpened => {
              return (
                <AntDesignIcon
                  name={isOpened ? 'up' : 'down'}
                  color={Colors.inputicongrey}
                  size={20}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={{borderRadius: 10}}
            rowStyle={{
              backgroundColor: Colors.inputfieldgrey,
              borderBottomColor: Colors.grey,
              height: 40,
              paddingHorizontal: 10,
            }}
            rowTextStyle={{
              fontFamily: 'Raleway-Medium',
              textAlign: 'left',
              color: Colors.blue,
              fontSize: 16,
            }}
            dropdownOverlayColor="rgba(0, 0, 0, 0.6)"
            selectedRowTextStyle={{color: Colors.peach}}
          />
        </View>
        <TextInput
          secureTextEntry
          mode="outlined"
          placeholder="Strong Password"
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
        <TextInput
          secureTextEntry
          mode="outlined"
          placeholder="Confirm Password"
          value={details.password2}
          onChangeText={text => setDetails({...details, password2: text})}
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

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.textView}>
        <Text style={styles.newMemberText}>Already a member?</Text>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.registerText}>
          Log In
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundgrey,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  inputContainer: {
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  inputField: {
    backgroundColor: Colors.inputfieldgrey,
    marginVertical: 10,
    height: 50,
  },
  halfField: {
    backgroundColor: Colors.inputfieldgrey,
    marginVertical: 10,
    height: 50,
    width: '48%',
  },
  heading: {
    color: Colors.black,
    fontSize: 27,
    fontFamily: 'Raleway-Bold',
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
    marginBottom: 40,
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
