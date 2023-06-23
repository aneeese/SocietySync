import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Keyboard,
  Pressable,
  TouchableOpacity
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from '../assets/colors';
import {TextInput, Button} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function VolunteerEditScreen({route, navigation}) {
  const [details, setDetails] = useState(route.params.details);
  const positions = ['Event Management', 'Media', 'Content', 'Graphics'];
  const isImg =
    details.image === null || details.image === undefined ? false : true;

  const updateDetails = () => {
    route.params.editDetails(details)
    navigation.goBack()
  };

  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={{alignItems: 'center'}}>
      <View>
        <View style={styles.imageMissing}>
          {isImg && (
            <Image
              source={require(`../assets/imgs/profile.jpg`)}
              style={styles.image}
            />
          )}

          <View style={styles.editIcon}>
            <MaterialCommunityIcon 
              name="circle-edit-outline" 
              size={25} 
              color={Colors.peach}
              onPress={() => console.log("Edit Picture Icon Pressed!")} 
              
            />
          </View>
          
        </View>
      </View>

      <KeyboardAwareScrollView style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder="Full Name"
          value={details.name}
          onChangeText={text => setDetails({...details, name: text})}
          right={
            <TextInput.Icon
              icon="account-outline"
              iconColor="#C6C6C6"
              style={{paddingTop: 8}}
            />
          }
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
          placeholder="Registration Number"
          value={details.regNo}
          onChangeText={text => setDetails({...details, regNo: text})}
          right={
            <TextInput.Icon
              icon="cellphone"
              iconColor="#C6C6C6"
              style={{paddingTop: 8}}
            />
          }
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
          placeholder="Email"
          value={details.email}
          onChangeText={text => setDetails({...details, email: text})}
          right={
            <TextInput.Icon
              icon="email-outline"
              iconColor="#C6C6C6"
              style={{paddingTop: 8}}
            />
          }
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
          placeholder="Phone"
          value={details.phone}
          onChangeText={text => setDetails({...details, phone: text})}
          right={
            <TextInput.Icon
              icon="phone-outline"
              iconColor="#C6C6C6"
              style={{paddingTop: 8}}
            />
          }
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
        <SelectDropdown
          data={positions}
          onSelect={text => setDetails({...details, position: text})}
          defaultButtonText={details.position}
          defaultValue={details.position}
          buttonStyle={[
            styles.inputField,
            {width: '100%', borderRadius: 10, paddingHorizontal: 10},
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
      </KeyboardAwareScrollView>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => updateDetails()}
      >
        <Text style={styles.btnText}>Edit</Text>
      </TouchableOpacity>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageMissing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.black,
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: 11,
    left: 77,
    backgroundColor: Colors.white,
    borderRadius: 50,
    borderColor: Colors.darkgrey,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center" 
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputField: {
    backgroundColor: Colors.inputfieldgrey,
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Raleway-SemiBold',
  },
  btn: {
    backgroundColor: Colors.peach,
    height: 50,
    paddingHorizontal: 130,
    paddingBottom: 4,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default VolunteerEditScreen;
