import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import FeatherIcon from 'react-native-vector-icons/Feather'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../assets/colors'

function EventScreen({route, navigation}) {
  const [eventDetails, setEventDetails] = useState(route.params)

  const moveToEditScreen = () => {
    navigation.navigate("Event Edit", {eventDetails: eventDetails, editDetails: handleUpdation})
  }

  const handleUpdation = (updatedDetails) =>{
    console.log(eventDetails)
    setEventDetails(updatedDetails)
    console.log('Event Updated:', eventDetails);
  }

  const handleDeletion = () => {
    // delete by id
    console.log(eventDetails.id)
    navigation.goBack()
  }

  return (
    <ScrollView style={{}}>
      <View>
        <Image
          source={require('../assets/imgs/event.png')}
          style={{
            width: "100%",
            height: 400,
            position: "absolute"
          }}
        />

        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.2)'
          ]}
          style={styles.linearGradient}
        >
        </LinearGradient>
      </View>

      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.infoContainerModal}>
            <Text style={styles.headingModal}>{eventDetails.title}</Text>
            <Text style={styles.subheadingModal}>{eventDetails.type}</Text>

            <View style={styles.detailContainer}>
              <View style={styles.box}>
                <FontAwesomeIcon
                  name="calendar-day"
                  size={20}
                  color={Colors.peach}
                />
                <Text style={styles.boxText}>{eventDetails.date}</Text>
              </View>

              <View style={styles.box}>
                <AntDesignIcon name="clockcircle" size={20} color={Colors.peach} />
                <Text style={styles.boxText}>{eventDetails.time}</Text>
              </View>
              <View style={styles.box}>
                <Ionicons name="location" size={20} color={Colors.peach} />
                <Text style={styles.boxText}>{eventDetails.venue}</Text>
              </View>
            </View>

            <View style={styles.descriptionModal}>
              <Text              
                style={styles.descripText}
              >{eventDetails.desc}</Text>
            </View>

            <View style={styles.responseBtnModalContainer}>
              <View style={styles.responseBtn}>
                <MaterialCommIcon
                  name="pencil-circle"
                  size={50}
                  color={Colors.peach}
                  style={{marginRight: 20}}
                  onPress={() => moveToEditScreen()}
                />
              </View>

              <View style={styles.responseBtn}>
                <MaterialCommIcon
                  name="delete-circle"
                  size={50}
                  color={Colors.peach}
                  style={{marginLeft: 20}}
                  onPress={() => handleDeletion()}
                />
              </View>
            </View>
          </View>
        </View>
        
      </View>

      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 400
  },

  container:{
    justifyContent: "center",
    alignItems: 'center',
    marginTop: -60
  },
  modalView: {
    backgroundColor: Colors.white,
    width: '90%',
    borderRadius: 15,
    paddingVertical: 30,
    elevation: 10,
    marginBottom: 40
  },
  infoContainerModal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingModal: {
    color: Colors.black,
    fontFamily: 'Raleway-Bold',
    fontSize: 25,
  },
  subheadingModal: {
    color: Colors.grey,
    fontFamily: 'Raleway-Italic',
    fontSize: 16,
    marginTop: -5,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 20,
    paddingVertical: 10,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  boxText: {
    color: Colors.grey,
    fontFamily: 'Raleway-Medium',
    fontSize: 13,
    marginTop: 5
  },
  descriptionModal: {
    color: Colors.blue,
    width: '75%',
    borderTopColor: Colors.horizontalBar,
    borderTopWidth: 1,
    paddingTop: 5,
    marginTop: 15,
  },
  descripText: {
    textAlign: "center",
    color: Colors.blue,
    fontFamily: 'Raleway-Medium',
    fontSize: 15,
    paddingTop: 10,
  },
  responseBtnModalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 20
  },
})

export default EventScreen
