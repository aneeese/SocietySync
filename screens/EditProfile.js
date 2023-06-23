import {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Keyboard,
  Alert
} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker';
import {TextInput, Avatar, IconButton} from 'react-native-paper';
import Colors from '../assets/colors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {launchImageLibrary} from 'react-native-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfile({navigation}) {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    contact: '',
    position: '',
  });
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const defaultImage =
    'https://www.pngkit.com/png/detail/797-7975330_donna-picarro-dummy-avatar-png.png';
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
      validateField(date.toLocaleDateString())
    );
  };

  const updateUser = async () => {
    if (isValid()) {
      const updatedData = {
        name: details.name,
        gender: details.gender,
        contact: details.contact,
        dateOfBirth: date.toLocaleDateString(),
        position: details.position,
        picture: selectImage,
      };

      const databaseURL =
        'https://societysync-2e49a-default-rtdb.firebaseio.com';
      const userKey = await AsyncStorage.getItem('userDB_ID');
      console.log(userKey);
      // Make the PUT request
      fetch(`${databaseURL}/users/${userKey}.json`, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
      })
        .then(response => {
          if (response.ok) {
            console.log('Data updated successfully');
            Alert.alert('Success', 'Account information updated successfully.');
            navigation.navigate('Profile');
          } else {
            console.log('Data update failed');
          }
        })
        .catch(error => {
          console.log('Error occurred while updating data:', error);
        });
    } else {
      Alert.alert('Error', 'Please fill all the required fields.');
    }
  };

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, Response => {
      setSelectImage(Response.assets[0].uri);
      console.log(Response.assets[0].uri);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={Colors.peach} barStyle="light-content" />

      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() => ImagePicker()}>
        <Avatar.Image size={80} source={{uri: selectImage}} />
        <View style={styles.editBtn}>
          <IconButton
            icon="pencil-outline"
            iconColor={Colors.peach}
            size={13}
            style={{alignSelf: 'center'}}
            onPress={() => {
              // Handle edit icon press here
            }}
          />
        </View>
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
      </Pressable>

      <View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={updateUser}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => navigation.navigate('PasswordReset')}>
          <Text style={styles.resetBtnText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundgrey,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  editBtn: {
    position: 'absolute',
    top: 42,
    right: 136,
    width: 25,
    height: 25,
    backgroundColor: Colors.white,
    borderRadius: 100,
    borderColor: Colors.grey,
    borderWidth: 2,
    justifyContent: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 20,
  },
  inputField: {
    backgroundColor: Colors.inputfieldgrey,
    marginVertical: 7,
    height: 50,
  },
  halfField: {
    backgroundColor: Colors.inputfieldgrey,
    marginVertical: 7,
    height: 50,
    width: '48%',
  },
  editButton: {
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
  resetButton: {
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
  resetBtnText: {
    fontSize: 20,
    color: Colors.blue,
    fontFamily: 'Raleway-SemiBold',
  },
});
