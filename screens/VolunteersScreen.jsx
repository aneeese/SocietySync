import React, { useEffect, useState } from 'react'
import { View, StatusBar, StyleSheet, TextInput, Image, Text, TouchableOpacity, Pressable, Modal, FlatList } from 'react-native'
import Colors from '../assets/colors';
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
import VolunteerCard from '../components/VolunteerCard';

function VolunteersScreen({navigation}) {
  const volunteerDetails = [
    {
      id: Math.random(),
      name: "Muhammad Anes",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad Anees",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad Anees",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad Anees",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad Anees",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad Anees",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad Anees",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad Anees",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad Anees",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },
    {
      id: Math.random(),
      name: "Muhammad s",
      regNo: "FA20-BCS-045",
      position: "Event Management",
      email: "anees3@gmail.com",
      phone: "0332 5346821",
      image: "profile.jpg"
    },  
  ]
  const [search, setSearch] = useState("")
  const [details, setDetails] = useState(volunteerDetails)
  
  const deleteItem = (id) => {
    setDetails((volunteer) => volunteer.filter( (item => item.id !== id) ))
  }

  const handleUpdation = (updatedInfo) =>{
    const volunteer = details.indexOf(details.find((item) => item.id === updatedInfo.id))
    const updatedDetails = [...details]
    updatedDetails[volunteer] = updatedInfo
    setDetails(updatedDetails)
  }

  return (
    <View style={styles.parent}>
      <StatusBar 
        backgroundColor={Colors.peach}
        barStyle="light-content"
      />
      <View style={styles.searchBarContainer}>
        <TextInput 
          placeholder='Search'
          value={search}
          onChangeText={setSearch}
          style={styles.searchInputField}
        />
      </View>

      <FlatList 
        data={details}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          return(
            <VolunteerCard 
              details={item.item}
              deleteItem={deleteItem}
              handleUpdation={handleUpdation} 
              navigation={navigation} />
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1, 
    backgroundColor: Colors.backgroundgrey
  },
  searchBarContainer: { 
    backgroundColor: Colors.peach,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 20
  },
  searchInputField: {
    backgroundColor: Colors.transparentwhite,
    width: "90%",
    height: 45,
    borderRadius: 50,
    paddingHorizontal: 30,
    fontFamily: "Raleway-Regular",
    fontSize: 17
  }
});

export default VolunteersScreen
