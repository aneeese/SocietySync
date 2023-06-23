import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Modal, Pressable } from 'react-native'
import Colors from '../assets/colors';
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const SmallApplicationCard = ({details, deleteItem}) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const deleteHandler = id => {
    deleteItem(id);
  };

  const addHandler = (details) => {
    // add volunteer
    console.log("something happened:", details)
  }

  return(
    <View style={styles.parent}>
    
      <View style={styles.infoContainer}>
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
        style={{position: 'absolute', backgroundColor: 'red'}}>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.centeredModalView}>
          <View style={styles.modalView}>
            <Image
              source={require('../assets/imgs/profile.jpg')}
              style={styles.imageModal}
            />

            <View style={styles.infoContainerModal}>
              <Text style={styles.headingModal}>{details.name}</Text>
              <Text style={styles.subheadingModal}>{details.regNo}</Text>

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
                  <FeatherIcon name="phone" size={15} color={Colors.peach} />
                  <Text style={styles.contactInfo}>{details.phone}</Text>
                </View>
              </View>

              <Text style={styles.subsubheadingModal}>{details.position}</Text>

              <View style={styles.descriptionModal}>
                <Text style={[styles.descripText, {textAlign: "center"}]}>{details.descr}</Text>
              </View>

              <View style={styles.responseBtnModalContainer}>
                <View style={styles.responseBtn}>
                  <AntDesignIcon
                    name="checkcircle"
                    size={40}
                    color={Colors.peach}
                    style={{marginRight: 20}}
                    onPress={() => addHandler(details)}
                  />
                </View>

                <View style={styles.responseBtn}>
                  <AntDesignIcon
                    name="closecircle"
                    size={40}
                    color={Colors.blue}
                    style={{marginLeft: 20}}
                    onPress={() => deleteHandler(details.id)}
                  />
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
      </View>

      <IoniconsIcon
          name="eye-outline"
          size={30}
          color={Colors.peach}
          style={styles.viewIcon}
          onPress={() => setModalVisible(true)}
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
  centeredModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    backgroundColor: Colors.white,
    width: '90%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageModal: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: -60
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
  subsubheadingModal: {
    color: Colors.peach,
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
    marginTop: 22,
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
  descriptionModal: {
    color: Colors.blue,
    width: '62%',
    borderTopColor: Colors.horizontalBar,
    borderTopWidth: 1,
    paddingTop: 5,
    marginTop: 15,
  },
  responseBtnModalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 40,
    marginBottom: 30
  },
  descripText: {
    color: Colors.blue,
    fontFamily: 'Raleway-Medium',
    fontSize: 11,
    paddingBottom: 1,
  },
  
});

export default SmallApplicationCard
