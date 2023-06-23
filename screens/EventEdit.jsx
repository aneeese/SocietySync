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

function EventEditScreen({route, navigation}) {
  const [details, setDetails] = useState(route.params.eventDetails);
  const types = ['Workshop', 'Seminar', 'Recruitment Drive']
  const isImg =
    details.image === null || details.image === undefined ? false : true;

  const updateDetails = () => {
    console.log(details)
    route.params.editDetails(details)
    navigation.goBack()
  };
  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={{alignItems: 'center'}}>
      

      <KeyboardAwareScrollView style={styles.inputContainer}>
        <View style={styles.imageContainer}>
            <View style={styles.imageMissing}>
            {isImg && (
                <Image
                source={require(`../assets/imgs/event.png`)}
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
        <TextInput
          mode="outlined"
          placeholder="Title"
          value={details.title}
          onChangeText={text => setDetails({...details, title: text})}
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
          data={types}
          onSelect={text => setDetails({...details, type: text})}
          defaultButtonText={details.type}
          defaultValue={details.type}
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
        <TextInput
          mode="outlined"
          placeholder="Venue"
          value={details.venue}
          onChangeText={text => setDetails({...details, venue: text})}
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
       
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <TextInput
            mode="outlined"
            placeholder="Date"
            value={details.date}
            onChangeText={text => setDetails({...details, date: text})}
            style={[styles.inputField, {width: "45%"}]}
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
            placeholder="Time"
            value={details.time}
            onChangeText={text => setDetails({...details, time: text})}
            style={[styles.inputField, {width: "45%"}]}
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

        <TextInput
          mode="outlined"
          placeholder="Description"
          value={details.desc}
          onChangeText={text => setDetails({...details, desc: text})}
          style={[styles.inputField, {height: 150}]}
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
          multiline
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
    imageContainer: {
        marginTop: 50,
        marginBottom: 10,
        alignItems: "center"
      },
    imageMissing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.black,
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
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default EventEditScreen;
