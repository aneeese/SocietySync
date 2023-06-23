import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Modal, Pressable } from 'react-native'
import Colors from '../assets/colors';
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'

const VolunteerCard = ({details, deleteItem, handleUpdation, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const moveToEditScreen = (details) => {
    navigation.navigate("Volunteer Edit", {details: details, editDetails: updateHandler})
  }

  const deleteHandler = (id) => {
    deleteItem(id)
  }

  const updateHandler = (details) => {
    handleUpdation(details)
  }

  return(
    <View style={styles.parent}>
    
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.infoContainer}
      >
        <Image 
          source={require(`../assets/imgs/profile.jpg`)}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text
            style={styles.heading}
          >{details.name}</Text>
          <Text
            style={styles.subheading}
          >{details.position}</Text>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          style={{position: "absolute", backgroundColor: "red"}}
          >
          <Pressable 
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.centeredModalView}>
            <View style={styles.modalView}>
              <Image 
                source={require('../assets/imgs/profile.jpg')}
                style={styles.imageModal}
              />
              <MaterialCommIcon 
                  style={styles.editIcon}
                  name="pencil-circle" 
                  size={50} 
                  color={Colors.peach} 
                  onPress={() => moveToEditScreen(details)}
              />

              <View style={styles.infoContainerModal}>
                <Text style={styles.headingModal}>{details.name}</Text>
                <Text style={styles.subheadingModal}>{details.regNo}</Text>

                <Text style={styles.subsubheadingModal}>{details.position}</Text>

                <View style={styles.contactContainer}>
                  <View style={styles.emailContainer}>
                    <FontAwesomeIcon 
                      name="send-o"
                      size={15}
                      color={Colors.peach}
                    />
                    <Text style={styles.contactInfo}>{details.email}</Text>
                  </View>

                  <View style={styles.phoneContainer}>
                    <FeatherIcon 
                      name="phone"
                      size={15}
                      color={Colors.peach}
                    />
                    <Text style={styles.contactInfo}>{details.phone}</Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </Modal>
      </TouchableOpacity>

      <MaterialCommIcon 
        name="trash-can" 
        size={30} 
        color={Colors.peach}
        onPress={() => deleteHandler(details.id)}
      />      
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 10,
    
  },
  image: {
    width: 60, 
    height: 60,
    borderRadius: 50
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10
  },
  heading: {
    color: Colors.black,
    fontFamily: "Raleway-Bold",
    fontSize: 18,
  
  },
  subheading: {
    color: Colors.darkgrey,
    fontFamily: "Raleway-Bold",
    fontSize: 11,
  },
  
  centeredModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  modalView: {
    backgroundColor: Colors.white,
    width: "90%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  imageModal: {
    width: 150, 
    height: 150,
    borderRadius: 100,
    position: "absolute",
    bottom: 180
  },
  editIcon: {
    width: "90%",
    textAlign: "right",
    marginTop: 10
  },
  infoContainerModal: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  headingModal: {
    color: Colors.black,
    fontFamily: "Raleway-Bold",
    fontSize: 25,
  },
  subheadingModal: {
    color: Colors.grey,
    fontFamily: "Raleway-Italic",
    fontSize: 16,
    marginTop: -5
  },
  subsubheadingModal: {
    color: Colors.peach,
    fontFamily: "Raleway-Bold",
    fontSize: 18,
    marginTop: 22
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
    marginBottom: 30
  },
  emailContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start"
  },
  phoneContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-end"
  },
  contactInfo: {
    color: Colors.black,
    fontFamily: "Raleway-Medium",
    fontSize: 13,
    marginLeft: 5
  }
  
});

export default VolunteerCard
