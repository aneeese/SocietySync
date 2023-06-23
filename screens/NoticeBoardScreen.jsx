import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Colors from '../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import EventCard from '../components/EventCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, TextInput} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker'

function NoticeBoardScreen({navigation}) {
  const noticeboard = [
    {
      id: Math.random(),
      title: 'React Native',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      title: 'React Native',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      title: 'React Native',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      title: 'React ive',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
    {
      id: Math.random(),
      title: 'Rt Native',
      type: 'Workshop',
      venue: 'CL-6',
      time: '11:30-1PM',
      date: '27 May',
      desc: 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!',
      image: 'profile.jpg',
    },
  ];
  const types = ['Workshop', 'Seminar', 'Recruitment Drive']
  const [events, setEvents] = useState(noticeboard);
  const [newEvent, setNewEvent] = useState({})
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const handleAddition = () => {
    console.log(newEvent)
    const id = Math.random()
    setNewEvent(() => ({...newEvent, id: id}))
    setEvents(()=> [...events, newEvent])
    setNewEvent(() => ({
      id: "",
      title: '',
      type: '',
      venue: '',
      time: '',
      date: '',
      desc: '',}))
  }

  return (
    <KeyboardAwareScrollView style={styles.parent}>
      <StatusBar backgroundColor={Colors.peach} barStyle="light-content" />

      <View
        style={{
          marginHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 20,
            color: Colors.blue,
          }}>
          Upcoming Events
        </Text>
        <Text
          style={{
            fontFamily: 'Raleway-Medium',
            fontSize: 14,
            color: Colors.grey,
            textAlign: 'right',
            marginTop: -10,
          }}
          onPress={() => console.log('See All Clicked')}>
          See all
        </Text>
      </View>

      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={item => (<EventCard 
                                details={item.item} 
                                navigation={navigation} 
                              />)}
        horizontal={true}
      />

      <View
        style={{
          marginHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 20,
            color: Colors.blue,
          }}>
          New Event
        </Text>

        <View style={styles.inputContainer}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>

            <TouchableOpacity style={styles.uploadBtn}>
              <Text style={styles.uploadBtnText}>Upload a File</Text>
            </TouchableOpacity>
            <SelectDropdown
              data={types}
              onSelect={text => setNewEvent({...newEvent, type: text})}
              defaultButtonText="Type"
              defaultValue={newEvent.type}
              buttonStyle={[styles.inputField, {height: 40}]}
              buttonTextStyle={{
                fontFamily: 'Raleway-Medium',
                textAlign: 'left',
                color: Colors.blue,
                fontSize: 14,
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
            mode="outlined"
            placeholder="Title"
            value={newEvent.title}
            onChangeText={text => setNewEvent({...newEvent, title: text})}
            style={styles.inputField}
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
            placeholder="Venue"
            value={newEvent.venue}
            onChangeText={text => setNewEvent({...newEvent, venue: text})}
            style={styles.inputField}
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

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <TextInput
              mode="outlined"
              placeholder="Date"
              value={newEvent.date}
            onChangeText={text => setNewEvent({...newEvent, date: text})}
              style={[styles.inputField, {width: '48%'}]}
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
              value={newEvent.time}
            onChangeText={text => setNewEvent({...newEvent, time: text})}
              style={[styles.inputField, {width: '48%'}]}
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
            multiline
            value={newEvent.desc}
            onChangeText={text => setNewEvent({...newEvent, desc: text})}
            style={[styles.inputField, {height: 100}]}
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
        <TouchableOpacity 
          onPress={() => handleAddition()}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Add Event</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Colors.backgroundgrey,
    paddingVertical: 15,
  },

  inputContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  inputField: {
    backgroundColor: Colors.inputfieldgrey,
    marginVertical: 5,
    height: 45,
    borderRadius: 10,
  },

  btnText: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Raleway-SemiBold',
  },
  btn: {
    backgroundColor: Colors.peach,
    height: 45,
    paddingBottom: 4,
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  uploadBtnText: {
    fontSize: 14,
    color: Colors.peach,
    fontFamily: 'Raleway-Medium',
  },
  uploadBtn: {
    backgroundColor: Colors.white,
    height: 35,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.peach,
    borderWidth: 2,
    paddingHorizontal: 10,
    marginTop: 5
  },
});

export default NoticeBoardScreen;
